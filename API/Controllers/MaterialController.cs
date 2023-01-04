using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Core.Entities;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.utils;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Text;
using API.DTOs;
using DatingApp.API.Dtos;


namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class MaterialController : ControllerBase
    {
        // public static List<Mats> MaterialList() => new() {
        // new(1, "one","description of thing", 1,"wwwcom", 1,  1  ),};

        //   public static List<Mats> MaterialList() => new List<Mats>();
        List<Material> MaterialList = new List<Material>();
        // static List<Product> Products = new List<Product>();
        // Products.Add(new Product() { ProductId = i.ToString(), Quantity = 1 });

        private readonly StoreContext _context;
        public MaterialController(StoreContext context)
        {
            _context = context;
        }
        [EnableCors]
        [HttpGet]
        public async Task<ActionResult<List<Material>>> GetMaterial()
        {
            var materials = await _context.Materials.ToListAsync();

            return Ok(materials);
        }
        [EnableCors]
        [HttpGet("{id}")]
        public async Task<ActionResult<Material>> GetMaterial(int id)
        {
            return Ok(await _context.Materials.FindAsync(id));
        }

        private static readonly JsonSerializerSettings _options
                    = new() { NullValueHandling = NullValueHandling.Ignore };
        private string _pathString = @"/Users/rob/Desktop/drop";

        //test 1
        [EnableCors]
        [HttpPost]
        [Route("upload")]
        public void Upload(IFormFile file)
        {
            System.Diagnostics.Debug.WriteLine("recieved:");

            if (file.Length > 0)
            {
                string filePath = Path.Combine(_pathString, file.FileName);

                using (Stream filestream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(filestream);
                }


                MaterialList.Add(new Material()
                {
                    Id = 1,
                    Name = "one",
                    Description = "description of thing",
                    Size = 1,
                    Url = "www.com",
                    MaterialTypeId = 1,
                    MaterialLevelId = 1
                });


                // var jsonString = JsonConvert.SerializeObject(MaterialList, _options);

                // if (!System.IO.File.Exists(_pathString))
                //     {
                //           System.Diagnostics.Debug.WriteLine("hit:::  " + file.FileName);

                //         System.IO.File.WriteAllText(@"/Users/rob/Desktop/" + (file.FileName).ToString() + ".json", jsonString.ToString());

                //     }
                // {


                //     //      string jsonFilePath = Path.Combine(_pathString, file.FileName);
                //     // using (Stream filestream = new FileStream(jsonFilePath, FileMode.Create))
                //     // {
                //     //     file.CopyTo(filestream);
                //     // }
                // }

            }

        }

        //test 2

        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [EnableCors]
        [HttpPost]
        [Route("upload2")]
        public void Upload2(IFormFile file)
        {

            if (file.Length > 0)
            {
                string filePath = Path.Combine(_pathString, file.FileName);

                using (Stream filestream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(filestream);
                }
            }

        }
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [EnableCors]
        [HttpPost("pushfiledata")]
        public async Task<IActionResult> PushFileData(fileData FileName)
        {
        
          System.Diagnostics.Debug.WriteLine("hit:::  " + FileName.FileName);


             System.IO.File.WriteAllText(@"/Users/rob/Desktop/" +  (FileName.FileName).ToString() + ".json", "");

            //  string filePath = Path.Combine(_pathString,  FileName );

                // using (Stream filestream = new FileStream(filePath, FileMode.Create))
                // {
                //     file.CopyTo(filestream);
                // }

             return Ok("Success");
        }



        //**

         [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
        {
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();

            return CreatedAtRoute("GetUser", new { controller = "Users", 
                id = 0 },  " ");
        }

    }
}
