using System;
using System.Collections.Generic;
//using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
//using Microsoft.Extensions.Logging;
//using Microsoft.Extensions.Options;
using TodoAPI.Models;

namespace TodoAPI
{
    public class Startup
    {
        protected static class Constants
        {
            internal const string CorsOrigins = "CorsOrigins";
            internal const string CorsPolicy_TodoAppCors = "TodoAppCorsPolicy";
        }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<TodoContext>(opt =>
                opt.UseInMemoryDatabase("TodoList"));

            List<string> corsOrigins = new List<string>();
            Configuration.Bind(Constants.CorsOrigins, corsOrigins);
            if ((corsOrigins == null) || (corsOrigins.Count < 1))
                throw new InvalidOperationException($"configuration {Constants.CorsOrigins} is empty.");

            services.AddCors(options =>
            {
                options.AddPolicy(Constants.CorsPolicy_TodoAppCors,
                    builder =>
                    {
                        builder.WithOrigins(corsOrigins.ToArray())
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                    });
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseCors(Constants.CorsPolicy_TodoAppCors);

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
