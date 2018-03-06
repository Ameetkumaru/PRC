using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PRC.Data.Interface;
using PRC.Data.DTO;
using PRC.Data.Services;
using PRC.Data;
using PRC.Models;

namespace PRC.Controllers
{
    public class HomeController : Controller
    {
        #region private member
        private readonly ISchoolService _service;
        #endregion

        #region constructor
        public HomeController(ISchoolService service)
        {
            _service = service;
        }
        #endregion

        #region Home controller Actions
        public ActionResult Index()
        {
            Session["Longitude"] = -89.408236;
            Session["Latitude"] = 40.312589;
            Session["SchoolName"] = "Illinois";
            var schoollist = _service.GetAllSchoolName();
            List<School> list = schoollist.Select(x => new School
            {
                UNITID = x.UNITID,
                INSTNM = x.INSTNM
            }).ToList();

            ViewBag.SchoolList = new SelectList(list,"UNITID","INSTNM");
            
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

        public ActionResult Contact()
        {           
            return View();
        }

        public ActionResult Help()
        {
            return View();
        }
        
        public ActionResult TakeSurvey()
        {
            return View();
        }

        public ActionResult GoogleMap()
        {
                       
            ViewBag.latitude = ((Session["Latitude"]).ToString());
            ViewBag.longitude = (Session["Longitude"].ToString());
            ViewBag.SchoolName = (Session["SchoolName"].ToString());
            return View();
        }


        public ActionResult AdvancedSearch()
        {
            var countyName = _service.GetCountyList();

            List<string> list = countyName;            

            ViewBag.SchoolList = new SelectList(list, "", "");

            return View();
        }


        public ActionResult GetCityList(string county)
        {
            var CityName = _service.GetCityList(county);

            List<string> list = CityName;

            ViewBag.SchoolList = new SelectList(list, "", "");

            return PartialView("CityList");
        }

        public ActionResult GetZip(string city)
        {
            var zipList = _service.GetZIPList(city);

            List<string> list = zipList;

            ViewBag.SchoolList = new SelectList(list, "", "");

            return PartialView("ZIPList");
        }

        public ActionResult GetSchoolList(string zip)
        {
            var SchoolList = _service.GetSchoolList(zip);
           
            List<SchoolModel> list = new List<SchoolModel>();
            foreach(School items in SchoolList)
            {
                SchoolModel school = new SchoolModel();
                school.UNITID = items.UNITID;
                school.InstName = items.INSTNM;
                list.Add(school);
            }
            ViewBag.SchoolList = list;
            return View();
        }

        #endregion
    }
}