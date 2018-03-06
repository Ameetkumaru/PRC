using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PRC.Data.Interface;

namespace PRC.Controllers
{
    public class DataController : Controller
    {
        public ViewResult AcademicProgress()
        {
            return View();
        }
    }
}