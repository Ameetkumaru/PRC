using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PRC.Data;

namespace PRC.Models
{
    public class SchoolDetailModel
    {
        public int UnitID { get; set; }
        public string InstNm { get; set; }
        public string Addr { get; set; }
        public string City { get; set; }
        public string STAbbr { get; set; }
        public string ZIP { get; set; }
        public string CHFNm { get; set; }
        public string CHFTitle { get; set; }
        public string WebAddr { get; set; }
        public string Longitude { get; set; }
        public string Latitude { get; set; }
    }

}