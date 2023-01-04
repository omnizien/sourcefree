using System;  
using System.Collections.Generic;  
using System.Linq;  
using System.Text;  
using Newtonsoft.Json;  
using System.Net;  
using System.IO;  

namespace API.utils { 
public  class JsonFileUtils
{

    string _pathString = @"/Users/rob/Desktop";
    private static readonly JsonSerializerSettings _options
        = new() { NullValueHandling = NullValueHandling.Ignore };
    
    public static void writeJson(object obj, string fileName)
    {
        var jsonString = JsonConvert.SerializeObject(obj, Formatting.Indented, _options);
        // File.WriteAllText(fileName, jsonString);
       
        File.WriteAllText(@"/Users/rob/Desktop", jsonString);
  
    }

      public void write(IFormFile file)
        {
            if(file.Length > 0){
                string filePath = Path.Combine(_pathString, file.FileName);
                using (Stream filestream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(filestream);
                }
            }      
        }
    }
}