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
                      "~/Content/rzslider.css",
                      "~/Content/custom.css",
                      "~/Content/site.css"));


            // Angular Modules
            bundles.Add(new ScriptBundle("~/scripts/global")
                .Include(
                    "~/Scripts/jquery-1.10.2.js",
                    "~/Scripts/bootstrap.js",
                    "~/Scripts/angular.js",
                    "~/Scripts/angular-touch.js",
                    "~/Scripts/angular-ui-router.js",
                    "~/Scripts/angular-resource.min.js",
                    "~/Scripts/angular-cookies.min.js",
                    "~/Scripts/ui-bootstrap-tpls-0.13.0.js",
                    "~/Scripts/highcharts.js",
                "~/Scripts/angular-google-maps.js",
                    //"~/Scripts/ng-map.js",
                    "~/Scripts/rzslider.js",
                    "~/Scripts/Underscore.js"
                )
                );

            bundles.Add(new ScriptBundle("~/scripts/app")
                .Include(
                    "~/app/app.js",
                    "~/app/modules.js",
                    "~/app/config/auth.interceptor.js",
                    "~/app/config/http.interceptor.js",
                    "~/app/config/config.dev.js"
                )
                );

            bundles.Add(new ScriptBundle("~/scripts/modules")
                .Include(
                    "~/app/core/*.js"
                ));
        }
    }
}
