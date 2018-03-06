using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PRC.Controllers
{
    public class OurStoryController : Controller
    {
        // GET: OurStory
        public ActionResult KeyQuestions()
        {
            return View();
        }

        public ActionResult Concept()
        {
            return View();
        }


        public ActionResult TimeLine()
        {
            return View();
        }


        public ActionResult Metrics()
        {
            return View();

        }
    }
}