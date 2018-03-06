using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PRC.Data;

namespace PRC.Models
{
    public class SchoolModel
    {
        public int UNITID { get; set; } // School ID

        public string InstName { get; set; } // Institute Name

        public List<string> countyname { get; set; }
        public List<string> cityname { get; set; }
        public List<string> zip { get; set; }
    }
}