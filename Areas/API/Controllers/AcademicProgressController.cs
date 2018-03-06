using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PRC.Data.Interface;
using PRC.Data.Services;

namespace PRC.Areas.API.Controllers
{
    public class AcademicProgressController : Controller
    {
        #region Private Members
        private readonly IAcademicProgress _service;
        #endregion

        #region Constructor
        public AcademicProgressController(IAcademicProgress service)
        {
            _service = service;
        }
        #endregion

        #region Actions
        [HttpGet]
        public JsonResult Data(int UnitId)
        {
            return Json(new
            {
                EnrollMenAndWomen = _service.GetEnrollmentMenAndWomen(UnitId) 
            }, JsonRequestBehavior.AllowGet);            
        }
        #endregion
        
    }
}