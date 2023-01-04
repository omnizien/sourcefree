namespace Core.Entities
{
    public class Material
    {
        public int Id { get; set; }
       
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Size { get; set; }
        public string Url { get; set; }
        public MaterialType MaterialType { get; set; }
        public int MaterialTypeId { get; set; }
        public MaterialLevel MaterialLevel { get; set; }
        public int MaterialLevelId { get; set; }
    }
}
