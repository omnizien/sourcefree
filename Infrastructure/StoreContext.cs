
using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
        }

         public DbSet<Material> Materials { get; set; }
         public DbSet<MaterialLevel> MaterialLevel { get; set; }

          public DbSet<MaterialType> MaterialType { get; set; }
    }
}
 