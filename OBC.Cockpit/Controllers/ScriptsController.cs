using System.Configuration;
using System.Text;
using System.Web.Mvc;

namespace OBC.Cockpit.Controllers
{
    public class ScriptsController : Controller
    {
        public ActionResult Constants()
        {
            // Obviously this will be dynamically generated
            var script = new StringBuilder();
            script.Append("(function () {");
            script.Append("angular.module('app')");
            script.Append(".constant('Settings', {");
            script.AppendFormat("ApiUrl: '{0}',", ConfigurationManager.AppSettings["AppUrl"]);
            script.AppendFormat("MapKey: '{0}',", ConfigurationManager.AppSettings["MapKey"]);
            script.AppendFormat("DateTimeFormat: '{0}'", ConfigurationManager.AppSettings["DateTimeFormat"]);
            script.Append("});");
            script.Append("})();");
            return JavaScript(script.ToString());
        }
    }
}