﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoAPI.Models;

namespace TodoAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly TodoContext _context;

        private string GetUsername()
        {
            string username = "unknown";
            if ((this.User != null) && (this.User.Identity != null) && this.User.Identity.IsAuthenticated)
            {
                if (!string.IsNullOrWhiteSpace(this.User.Identity.Name))
                {
                    username = this.User.Identity.Name;
                }
                else
                {
                    if (this.User.Claims != null)
                    {
                        string nameFromClaim = User.Claims.Where(c => c.Type == "name").Select(c => c.Value).FirstOrDefault();
                        if (!string.IsNullOrWhiteSpace(nameFromClaim))
                            username = nameFromClaim;
                    }
                }
            }
            return username;
        }

        public TodoController(TodoContext context)
        {
            _context = context;
            string username = GetUsername();

            if (_context.TodoItems.Count() == 0)
            {
                // Create a new TodoItem if collection is empty,
                // which means you can't delete all TodoItems.
                _context.TodoItems.Add(new TodoItem { Name = "Item1", Owner = username });
                _context.SaveChanges();
            }
        }

        #region snippet_GetAll
        // GET: api/Todo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoItem>>> GetTodoItems()
        {
#if DEBUG
            //Check for User (should be guaranteed if [Authorize] present
            if ((this.User != null) && (this.User.Identity != null))
            {
                if (User.Identity.IsAuthenticated)
                {

                }
            }
#endif
            return await _context.TodoItems.ToListAsync();
        }

        #region snippet_GetByID
        // GET: api/Todo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoItem>> GetTodoItem(long id)
        {
            var todoItem = await _context.TodoItems.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            return todoItem;
        }
        #endregion
        #endregion

        #region snippet_Create
        // POST: api/Todo
        [HttpPost]
        public async Task<ActionResult<TodoItem>> PostTodoItem(TodoItem item)
        {
            if (string.IsNullOrWhiteSpace(item.Owner))
                item.Owner = GetUsername();

            _context.TodoItems.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTodoItem), new { id = item.Id }, item);
        }
        #endregion

        #region snippet_Update
        // PUT: api/Todo/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoItem(long id, TodoItem item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }
        #endregion

        #region snippet_Delete
        // DELETE: api/Todo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoItem(long id)
        {
            var todoItem = await _context.TodoItems.FindAsync(id);

            if (todoItem == null)
            {
                return NotFound();
            }

            _context.TodoItems.Remove(todoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        #endregion
    }
}
