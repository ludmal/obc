using System.Web;
using System.Web.Optimization;

namespace OBC.Cockpit
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
             bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/font-awesome.css",
                      "~/Content/ngDialog.min.css",
                      "~/Content/ngDialog-theme-default.min.css",
                      "~/Content/site.css"));


            // Angular Modules
            bundles.Add(new ScriptBundle("~/scripts/global")
                .Include(
                    "~/Scripts/jquery-1.10.2.js",
                    "~/Scripts/bootstrap.js",       
                    "~/Scripts/angular.js",
                    "~/Scripts/angular-touch.js",
                    "~/Scripts/angular-cookies.js",
                    "~/Scripts/angular-resource.js",
                    "~/Scripts/angular-sanitize.js",
                    "~/Scripts/angular-ui-router.js",
                    "~/Scripts/angular-local-storage.js",
                    "~/Scripts/loading-bar.js",
                    "~/Scripts/angular-busy.js",
                    "~/Scripts/angular-notify.js",
                    "~/Scripts/ui-bootstrap-tpls-0.13.0.js",
                    "~/Scripts/jquery.easing.min.js",
                    "~/Scripts/ngDialog.min.js",
                    "~/Scripts/moment.js",
                    "~/Scripts/angular-moment.js",
                    "~/Scripts/highcharts.js",
                    "~/Scripts/check-list-model.js",
                    "~/Scripts/layout.js",
                    "~/Scripts/angular-google-maps.js",
                    "~/Scripts/Underscore.js"
                )
                );

            var ngConfig = "~/app/config/config.prod.js";
#if DEBUG
            ngConfig = "~/app/config/config.dev.js";
#endif

            bundles.Add(new ScriptBundle("~/scripts/app")
                .Include(
                    "~/app/app.js",
                    "~/app/modules.js",
                    "~/app/config/auth.interceptor.js",
                    "~/app/config/http.interceptor.js",
                    ngConfig
                )
                );

            bundles.Add(new ScriptBundle("~/scripts/modules")
                .Include(
                    "~/app/core/*.js",
                    "~/app/admin/*.js",
                    "~/app/home/*.js",
                    "~/app/library/*.js",
                    "~/app/security/*.js",
                    "~/app/cts/*.js"
                ));
        }
    }
}
