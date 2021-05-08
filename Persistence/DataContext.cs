using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        // we are going to call our table Activities
        public DbSet<Activity> Activities { get; set; }
    }
}