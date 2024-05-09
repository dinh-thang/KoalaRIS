using Application.Entities;

namespace Application.Interfaces
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        T Get(int id);
        T GetAll();
        T Add(T entity);
        T Update(T entity);
        T Delete(int id);
    }
}
