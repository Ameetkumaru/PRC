using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using PRC.Data.Interface;
using PRC.Data.Services;
using PRC.Data.DTO;

namespace PRC.Areas.API.Controllers
{
    public class TestController : ApiController
    {
        #region Private Members
        private readonly IAcademicProgress _service;
        #endregion

        public TestController()
        { }

        #region Constructor
        public TestController(IAcademicProgress service)
        {
            _service = service;
        }
        #endregion

        #region Actions
       [System.Web.Http.HttpGet]
        public IHttpActionResult Data(int UnitId)
        {

            EnrollMenAndWomen en = new EnrollMenAndWomen();
             
            en = _service.GetEnrollmentMenAndWomen(UnitId);
            return Ok(en);

        }

        #endregion
    }
}
