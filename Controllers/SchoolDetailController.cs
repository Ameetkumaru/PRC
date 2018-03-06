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
    public class SchoolDetailController : Controller
    {
        #region private member
        private readonly ISchoolService _service;
        #endregion

        #region constructor
        public SchoolDetailController(ISchoolService service)
        {
            _service = service;
        }
        #endregion

        public ActionResult SetValue(int SchoolID)
        {            
            Session["SchoolID"] = SchoolID;
            return RedirectToAction("Index");
        }

        public ActionResult Index()
        {

            int schoolId = Convert.ToInt32(Session["SchoolID"].ToString());
            GetSchoolDetail schoolDetail = _service.GetSchoolDetail(schoolId);
            Session["Longitude"] = schoolDetail.Longitude;
            Session["Latitude"] = schoolDetail.Latitude;
            Session["SchoolName"] = schoolDetail.InstNm;
            return View(schoolDetail);
        }
    }
}