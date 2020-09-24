window.addEventListener("load", loadSite);

// .............Site Loading Function
function loadSite () {
    loadNavBar();
    loadCarousel();
    loadAboutUs();
    loadServiceAndTech();
    loadContactUs();
    loadFooter();
}


// .............Site NavBar Section Loading Function

function loadNavBar () {
    let navbar = document.getElementById("navBar");
    navbar.innerHTML = "<!-- Navbar Start -->\n" +
        "<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n" +
        "    <a class=\"navbar-brand\" href=\"#\">\n" +
        "        <img src=\"asset/img/company-logo.png\" width=\"170\" class=\"d-inline-block align-top\"\n" +
        "             alt=\"company-logo\">\n" +
        "    </a>\n" +
        "    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n" +
        "            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
        "        <span class=\"navbar-toggler-icon\"></span>\n" +
        "    </button>\n" +
        "\n" +
        "    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n" +
        "        <ul class=\"navbar-nav mr-auto\">\n" +
        "            <li class=\"nav-item active mx-4\">\n" +
        "                <a class=\"nav-link\" href=\"#home\">Home</a>\n" +
        "            </li>\n" +
        "            <li class=\"nav-item mx-4\">\n" +
        "                <a class=\"nav-link\" href=\"#about_area\">About Us</a>\n" +
        "            </li>\n" +
        "            <li class=\"nav-item mx-4\">\n" +
        "                <a class=\"nav-link\" href=\"#contentService\">Services & Technologies</a>\n" +
        "            </li>\n" +
        "            <li class=\"nav-item mx-4\">\n" +
        "                <a class=\"nav-link\" href=\"#contentContactUs\">Contact Us</a>\n" +
        "            </li>\n" +
        "        </ul>\n" +
        "        <form class=\"form-inline my-2 my-lg-0\" onsubmit=\"return false\">\n" +
        "            <input class=\"form-control mr-sm-2 search-field\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n" +
        "            <button class=\"btn btn-purple my-2 my-sm-0\" id=\"btnNavSearch\" type=\"submit\"> Search</button>\n" +
        "        </form>\n" +
        "    </div>\n" +
        "</nav>\n" +
        "<!-- Navbar End -->\n" +
        "\n" +
        "<span id=\"home\"></span>"
}

// .............Nav Bar Section End

// .............Site Carousel Section Loading Function

function loadCarousel () {
    let carousel = document.getElementById("carousel");
    carousel.innerHTML = "<!-- Carousel Start -->\n" +
        "<div class=\"container-fluid p-0\">\n" +
        "    <div class=\"row m-0\">\n" +
        "        <div class=\"col p-0\">\n" +
        "            <div id=\"homePageCarousel\" class=\"carousel slide\" data-interval=\"2000\" data-ride=\"carousel\">\n" +
        "                <!-- Carousel Indicator Start -->\n" +
        "                <ol class=\"carousel-indicators\">\n" +
        "                    <li data-target=\"#homePageCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n" +
        "                    <li data-target=\"#homePageCarousel\" data-slide-to=\"1\"></li>\n" +
        "                    <li data-target=\"#homePageCarousel\" data-slide-to=\"2\"></li>\n" +
        "                    <li data-target=\"#homePageCarousel\" data-slide-to=\"3\"></li>\n" +
        "                </ol>\n" +
        "                <!-- Carousel Indicator End -->\n" +
        "\n" +
        "                <!-- Carousel Images Start -->\n" +
        "                <div class=\"carousel-inner\">\n" +
        "                    <div class=\"carousel-item active\">\n" +
        "                        <img class=\"d-block w-100\" src=\"asset/img/carousel/01.png\" alt=\"First slide\">\n" +
        "                    </div>\n" +
        "                    <div class=\"carousel-item\">\n" +
        "                        <img class=\"d-block w-100\" src=\"asset/img/carousel/02.png\" alt=\"Second slide\">\n" +
        "                    </div>\n" +
        "                    <div class=\"carousel-item\">\n" +
        "                        <img class=\"d-block w-100\" src=\"asset/img/carousel/03.png\" alt=\"Third slide\">\n" +
        "                    </div>\n" +
        "                    <div class=\"carousel-item\">\n" +
        "                        <img class=\"d-block w-100\" src=\"asset/img/carousel/04.png\" alt=\"Fourth slide\">\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <!-- Carousel Images End -->\n" +
        "\n" +
        "                <!-- Carousel Previous Button Start -->\n" +
        "                <a class=\"carousel-control-prev\" href=\"#homePageCarousel\" role=\"button\" data-slide=\"prev\">\n" +
        "                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n" +
        "                </a>\n" +
        "                <!-- Carousel Previous Button End -->\n" +
        "\n" +
        "                <!-- Carousel Next Button Start -->\n" +
        "                <a class=\"carousel-control-next\" href=\"#homePageCarousel\" role=\"button\" data-slide=\"next\">\n" +
        "                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n" +
        "                </a>\n" +
        "                <!-- Carousel Next Button End -->\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "</div>\n" +
        "<!-- Carousel End -->\n" +
        "\n" +
        "<span id=\"about_area\"></span>"
}

// .............Carousel Section End

// .............Site AboutUs Section Loading Function

function loadAboutUs () {
    let aboutus = document.getElementById("aboutUs");
   aboutus.innerHTML= "<!-- About Us Content Start -->\n" +
       "<div class=\"container-fluid mt-5\" id=\"contentAbout\">\n" +
       "    <div class=\"row pb-4\">\n" +
       "        <div class=\"col\">\n" +
       "            <h1 class=\"text-center display-4 font-weight-bold\">About us</h1>\n" +
       "        </div>\n" +
       "    </div>\n" +
       "    <div class=\"row aboutus-section-first cover-size\">\n" +
       "        <div class=\"col-sm-0 col-md-6\"></div>\n" +
       "\n" +
       "        <!----- about us description section start -------->\n" +
       "        <div class=\"col-sm-12 col-md-6 bg-white justify-content-center pt-md-5 pb-md-5\">\n" +
       "            <div class=\"jumbotron jumbotron-fluid m-0 p-0 bg-light\">\n" +
       "                <div class=\"container mb-4 aboutus-title\">\n" +
       "                    <h1>Meet The Monterail Team</h1>\n" +
       "                </div>\n" +
       "                <div class=\"container\">\n" +
       "                    <p class=\"text-justify\">When we started in 2010, we were just a tight group dedicated to the craft\n" +
       "                        of product building.\n" +
       "                        Our attitude hasn't changed—but since then, we’ve grown to be a team of 110+ team members with\n" +
       "                        every skill web software needs to be successful. From the first concept to the grand\n" +
       "                        release.</p>\n" +
       "                </div>\n" +
       "            </div>\n" +
       "        </div>\n" +
       "        <!--        about us description section end--------->\n" +
       "\n" +
       "    </div>\n" +
       "\n" +
       "    <div class=\"row aboutus-section-second cover-size\">\n" +
       "\n" +
       "        <!-----        about us description section start-------->\n" +
       "        <div class=\"col-sm-12 col-md-6 bg-white justify-content-center pt-md-5 pb-md-5\">\n" +
       "            <div class=\"jumbotron jumbotron-fluid m-0 p-0 bg-light\">\n" +
       "                <div class=\"container mb-4 aboutus-title\">\n" +
       "                    <h1>How we work</h1>\n" +
       "                </div>\n" +
       "                <div class=\"container\">\n" +
       "                    <p class=\"text-justify\">Our working, living and even resting culture is constantly improved with\n" +
       "                        simpler solutions,\n" +
       "                        and apps play a great role in that process. We at Monterail are often amazed with some of\n" +
       "                        the brilliant ideas our potential clients bring to the table, thinking–how does one come up\n" +
       "                        with something like that? We like that the part before we get the spec is a wonderful mystery\n" +
       "                        of each individual project, but what happens after–is our field of expertise</p>\n" +
       "                </div>\n" +
       "            </div>\n" +
       "        </div>\n" +
       "        <!-- about us description section end --------->\n" +
       "\n" +
       "        <div class=\"col-sm-0 col-md-6\">\n" +
       "        </div>\n" +
       "    </div>\n" +
       "\n" +
       "    <div class=\"row aboutus-section-thired cover-size\">\n" +
       "        <div class=\"col-sm-0 col-md-6\"></div>\n" +
       "\n" +
       "        <!----- about us description section start -------->\n" +
       "        <div class=\"col-sm-12 col-md-6 bg-white justify-content-center pt-md-5 pb-md-5\">\n" +
       "            <div class=\"jumbotron jumbotron-fluid m-0 p-0 bg-light\">\n" +
       "                <div class=\"container mb-4 aboutus-title\">\n" +
       "                    <h1>Community, with love</h1>\n" +
       "                </div>\n" +
       "                <div class=\"container\">\n" +
       "                    <p class=\"text-justify\">There’s nothing more exciting than going out there and saying why what you\n" +
       "                        do matters.\n" +
       "                        That’s what motivates us when we organize, support and attend to local events in Wrocław.\n" +
       "                        We love to listen to what others do; we love to share what we’ve done.\n" +
       "                        So… when and where would you like to talk?</p>\n" +
       "                </div>\n" +
       "            </div>\n" +
       "        </div>\n" +
       "        <!-- about us description section end --------->\n" +
       "    </div>\n" +
       "</div>\n" +
       "<!-- About Us Content End -->"
}

// .............AboutUs Section End

// .............Site Service&Tech Section Loading Function

function loadServiceAndTech () {
    let serviceandtech = document.getElementById("serviceAndTech");
    serviceandtech.innerHTML = "<!-- Services & Technologies Content Start -->\n" +
        "<div class=\"container-fluid\" id=\"contentService\">\n" +
        "    <!-- Page Heading Div Start -->\n" +
        "    <div class=\"row pt-4 pb-4\">\n" +
        "        <div class=\"col\">\n" +
        "            <h1 class=\"text-center display-4 font-weight-bold\">Services & Technologies</h1>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <!-- Page Heading Div End -->\n" +
        "    <div class=\"row pt-3 pr-3 pl-3\">\n" +
        "        <!-- Services Content Start-->\n" +
        "        <div class=\"col-sm-12 col-md-6 p-0 service-content\">\n" +
        "            <div class=\"card-deck mb-4\">\n" +
        "                <!-- First card Start-->\n" +
        "                <div class=\"card text-white bg-purple text-center\">\n" +
        "                    <div class=\"card-body\">\n" +
        "                        <img src=\"asset/img/service/web.png\" alt=\"webdesign\">\n" +
        "                        <h5 class=\"card-title\">Web Design & Development</h5>\n" +
        "                        <p class=\"card-text small\">Looking to build a new website, or redesign\n" +
        "                            an existing one? Our\n" +
        "                            team\n" +
        "                            of internet technology experts delivers innovative and robust web\n" +
        "                            portals capable of\n" +
        "                            handling the most demanding performance needs.</p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <!-- First card End-->\n" +
        "\n" +
        "                <!-- Second card Start-->\n" +
        "                <div class=\"card text-white bg-purple text-center\">\n" +
        "                    <div class=\"card-body\">\n" +
        "                        <img src=\"asset/img/service/mobile.png\" alt=\"mobileapp\">\n" +
        "                        <h5 class=\"card-title\">Mobile Apps Development</h5>\n" +
        "                        <p class=\"card-text small\">Looking to make your web site content available through mobile\n" +
        "                            platforms? TRC builds applications and web sites that are fully capable of being\n" +
        "                            deployed to mobile phones and Internet connected devices.</p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <!-- Second card End-->\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"card-deck\">\n" +
        "                <!-- Third card Start-->\n" +
        "                <div class=\"card text-white bg-purple text-center\">\n" +
        "                    <div class=\"card-body\">\n" +
        "                        <img src=\"asset/img/service/training.png\" alt=\"training\">\n" +
        "                        <h5 class=\"card-title\">Training</h5>\n" +
        "                        <p class=\"card-text small\">Need help understanding how to get the most out of your technology\n" +
        "                            solutions? TRC offers training appropriate for business decision makers, IT managers,\n" +
        "                            developers and end users.</p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <!-- Third card End-->\n" +
        "\n" +
        "                <!-- Fourth card Start-->\n" +
        "                <div class=\"card text-white bg-purple text-center\">\n" +
        "                    <div class=\"card-body\">\n" +
        "                        <img src=\"asset/img/service/support.png\" alt=\"training\">\n" +
        "                        <h5 class=\"card-title\">Support</h5>\n" +
        "                        <p class=\"card-text small\">TRC' team of\n" +
        "                            internet strategists, technical leads and project managers stay involved with your web site\n" +
        "                            as it grows, on call to handle new development tasks, interruptions in service or any other\n" +
        "                            issues that might arise long after your site has been launched.</p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <!-- Fourth card End-->\n" +
        "            </div>\n" +
        "        </div>\n" +
        "\n" +
        "        <!--------- Technology Icon Section Start------->\n" +
        "        <div class=\"col-sm-12 col-md-6 p-0\">\n" +
        "            <div class=\"row\">\n" +
        "                <div class=\"col-4 d-flex justify-content-center align-items-center\">\n" +
        "                    <img src=\"asset/img/technology/laravel.png\" alt=\"\" class=\"img-fluid icon-size icon-style\">\n" +
        "                </div>\n" +
        "                <div class=\"col-4 d-flex justify-content-center align-items-center\">\n" +
        "                    <img src=\"asset/img/technology/codeigniter.png\" alt=\"\" class=\"img-fluid icon-size icon-style\">\n" +
        "                </div>\n" +
        "                <div class=\"col-4 d-flex justify-content-center align-items-center\">\n" +
        "                    <img src=\"asset/img/technology/nodejs.png\" alt=\"\" class=\"img-fluid icon-size icon-style\">\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"row\">\n" +
        "                <div class=\"col-4 d-flex justify-content-center align-items-center\">\n" +
        "                    <img src=\"asset/img/technology/html.png\" alt=\"\" class=\"img-fluid icon-size icon-style\">\n" +
        "                </div>\n" +
        "                <div class=\"col-4 d-flex justify-content-center align-items-center\">\n" +
        "                    <img src=\"asset/img/technology/css.png\" alt=\"\" class=\"img-fluid icon-size icon-style\">\n" +
        "                </div>\n" +
        "                <div class=\"col-4 d-flex justify-content-center align-items-center\">\n" +
        "                    <img src=\"asset/img/technology/js.png\" alt=\"\" class=\"img-fluid icon-size icon-style\">\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"row\">\n" +
        "                <div class=\"col-4 d-flex justify-content-center align-items-center\">\n" +
        "                    <img src=\"asset/img/technology/jquery.png\" alt=\"\" class=\"img-fluid icon-size icon-style\">\n" +
        "                </div>\n" +
        "                <div class=\"col-4 d-flex justify-content-center align-items-center\">\n" +
        "                    <img src=\"asset/img/technology/bootstrap.png\" alt=\"\" class=\"img-fluid icon-size icon-style\">\n" +
        "                </div>\n" +
        "                <div class=\"col-4 d-flex justify-content-center align-items-center\">\n" +
        "                    <img src=\"asset/img/technology/tailwindcss.png\" alt=\"\" class=\"img-fluid icon-size icon-style\">\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"row\">\n" +
        "                <div class=\"col-4 d-flex justify-content-center align-items-center\">\n" +
        "                    <img src=\"asset/img/technology/angular.png\" alt=\"\" class=\"img-fluid icon-size icon-style\">\n" +
        "                </div>\n" +
        "                <div class=\"col-4 d-flex justify-content-center align-items-center\">\n" +
        "                    <img src=\"asset/img/technology/vuejs.png\" alt=\"\" class=\"img-fluid icon-size icon-style\">\n" +
        "                </div>\n" +
        "                <div class=\"col-4 d-flex justify-content-center align-items-center\">\n" +
        "                    <img src=\"asset/img/technology/react.png\" alt=\"\" class=\"img-fluid icon-size icon-style\">\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <!------------- Technology Icon Section End ---------->\n" +
        "</div>\n" +
        "<!-- Services & Technologies Content End -->"
}

// .............Service&Tech Section End

// .............Site ContactUs Section Loading Function

function loadContactUs () {
    let contactus = document.getElementById("contactUs");
    contactus.innerHTML = "<!-- Contact Us Content Start -->\n" +
        "<div class=\"container-fluid\" id=\"contentContactUs\">\n" +
        "    <div class=\"row  cover-image\">\n" +
        "        <!--    title and contact us form start-->\n" +
        "        <div class=\"col-sm-12 col-md-6 p-sm-2 p-md-5 bg-white\">\n" +
        "\n" +
        "            <!-- title section start-->\n" +
        "            <div class=\"container mb-4\">\n" +
        "                <h1>Contact Us</h1>\n" +
        "            </div>\n" +
        "            <!-- title section end-->\n" +
        "\n" +
        "            <!-- form section start-->\n" +
        "            <div class=\"container\">\n" +
        "                <div class=\"jumbotron jumbotron-fluid m-md-0 mb-sm-3 p-5\">\n" +
        "                    <div class=\"container\">\n" +
        "                        <form action=\"\">\n" +
        "                            <div class=\"form-group\">\n" +
        "                                <label for=\"txtname\">Name\n" +
        "                                    <span class=\"text-danger\">*</span>\n" +
        "                                </label>\n" +
        "                                <input type=\"text\" name=\"\" id=\"txtname\" class=\"form-control\" placeholder=\"\"\n" +
        "                                       onkeyup=\"inputFieldValidation(txtname,'^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,9}$')\">\n" +
        "                            </div>\n" +
        "                            <div class=\"form-group\">\n" +
        "                                <label for=\"txtemail\">E-Mail\n" +
        "                                    <span class=\"text-danger\">*</span>\n" +
        "                                </label>\n" +
        "                                <input type=\"text\" name=\"\" id=\"txtemail\" class=\"form-control\" placeholder=\"\"\n" +
        "                                       onkeyup=\"inputFieldValidation(txtemail,'^[a-zA-Z0-9_!#$%&\\'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$')\">\n" +
        "                            </div>\n" +
        "                            <div class=\"form-group\">\n" +
        "                                <label for=\"txtcontactnumber\">Contact Number\n" +
        "                                    <span class=\"text-danger\">*</span>\n" +
        "                                </label>\n" +
        "                                <input type=\"text\" name=\"\" id=\"txtcontactnumber\" class=\"form-control\" placeholder=\"\"\n" +
        "                                       onkeyup=\"inputFieldValidation(txtcontactnumber,'^(((0\\\\\\\\d{9})){0,1})$')\">\n" +
        "                            </div>\n" +
        "                            <div class=\"form-group\">\n" +
        "                                <label for=\"txtcompany\">Company\n" +
        "                                    <span class=\"text-danger\">*</span>\n" +
        "                                </label>\n" +
        "                                <input type=\"text\" name=\"\" id=\"txtcompany\" class=\"form-control\" placeholder=\"\"\n" +
        "                                       onkeyup=\"inputFieldValidation(txtcompany,'^.*$')\">\n" +
        "                            </div>\n" +
        "                            <div class=\"form-group\">\n" +
        "                                <label for=\"txtdescription\">What Do You Want To Build</label>\n" +
        "                                <textarea type=\"text\" name=\"\" id=\"txtdescription\" class=\"form-control\" placeholder=\"\"\n" +
        "                                          onkeyup=\"inputFieldValidation(txtdescription,'^.*$')\"></textarea>\n" +
        "                            </div>\n" +
        "\n" +
        "                            <!-- btn section start-->\n" +
        "                            <div class=\"form-group\">\n" +
        "                                <button type=\"submit\" class=\"btn submit-btn\">Send</button>\n" +
        "                            </div>\n" +
        "                            <!-- btn section end-->\n" +
        "\n" +
        "                        </form>\n" +
        "\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <!--        form section end-->\n" +
        "\n" +
        "        </div>\n" +
        "        <!--title and contact us form end-->\n" +
        "\n" +
        "        <!--    image section start-->\n" +
        "        <div class=\"col-sm-0 d-sm-none col-md-6\"></div>\n" +
        "        <!--    image section end-->\n" +
        "\n" +
        "    </div>\n" +
        "</div>\n" +
        "<!-- Contact Us Content End -->"
}

// .............ContactUs Section End

// .............Site Footer Section Loading Function

function loadFooter () {
    let footer = document.getElementById("footer");
    footer.innerHTML = "<!-- Footer Area Start -->\n" +
        "<div class=\"container-fluid p-0\">\n" +
        "    <!-- footer first row start -->\n" +
        "    <div class=\"row pt-4 pb-2 bg-gray vh-35 d-flex align-items-center m-0\">\n" +
        "        <div class=\"col-sm-6 col-md-3 text-center\">\n" +
        "            <img src=\"asset/img/footer/completed.png\" alt=\"\" class=\"img-fluid pb-2\">\n" +
        "            <h3 class=\"text-light\">60+</h3>\n" +
        "            <h5 class=\"mb-3 text-light\">Projects Completed</h5>\n" +
        "        </div>\n" +
        "        <div class=\"col-sm-6 col-md-3 text-center\">\n" +
        "            <img src=\"asset/img/footer/ongoing.png\" alt=\"\" class=\"img-fluid pb-2\">\n" +
        "            <h3 class=\"text-light\">8</h3>\n" +
        "            <h5 class=\"mb-3 text-light\">Projects Ongoing</h5>\n" +
        "        </div>\n" +
        "        <div class=\"col-sm-6 col-md-3 text-center\">\n" +
        "            <img src=\"asset/img/footer/client.png\" alt=\"\" class=\"img-fluid pb-2\">\n" +
        "            <h3 class=\"text-light\">50+</h3>\n" +
        "            <h5 class=\"mb-3 text-light\">Satisfied Clients</h5>\n" +
        "        </div>\n" +
        "        <div class=\"col-sm-6 col-md-3 text-center\">\n" +
        "            <img src=\"asset/img/footer/employee.png\" alt=\"\" class=\"img-fluid pb-2\">\n" +
        "            <h3 class=\"text-light\">10+</h3>\n" +
        "            <h5 class=\"mb-3 text-light\">Working Employees</h5>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <!-- footer first row end -->\n" +
        "\n" +
        "    <!-- footer second row start -->\n" +
        "    <div class=\"row vh-35 m-0\">\n" +
        "        <div class=\"col-sm-12 col-md-5 d-flex justify-content-center align-items-center\">\n" +
        "            <div class=\"row\">\n" +
        "                <div class=\"col-md-12\">\n" +
        "                    <img src=\"asset/img/company-logo.png\" alt=\"\" class=\"img-fluid\">\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"col-sm-12 col-md-7 p-3\">\n" +
        "            <div class=\"row\">\n" +
        "                <div class=\"col-sm-12 col-md-3 text-center\">\n" +
        "                    <h5>Services</h5>\n" +
        "                    <ul class=\"list-unstyled mb-0\">\n" +
        "                        <li>\n" +
        "                            <a href=\"#\">Web Design & Development</a>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <a href=\"#\">Mobile Apps Development</a>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <a href=\"#\">Training</a>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <a href=\"#\">Support</a>\n" +
        "                        </li>\n" +
        "                    </ul>\n" +
        "                </div>\n" +
        "                <div class=\"col-sm-12 col-md-3 text-center\">\n" +
        "                    <h5>Technologies</h5>\n" +
        "                    <ul class=\"list-unstyled mb-0\">\n" +
        "                        <li>\n" +
        "                            <a href=\"\">Laravel</a>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <a href=\"\">NodeJs</a>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <a href=\"\">HTML</a>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <a href=\"\">CSS</a>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <a href=\"\">Bootstrap</a>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <a href=\"\">JS</a>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <a href=\"\">jQuery</a>\n" +
        "                        </li>\n" +
        "                    </ul>\n" +
        "                </div>\n" +
        "                <div class=\"col-sm-12 col-md-3 text-center\">\n" +
        "                    <h5>Tools</h5>\n" +
        "                    <ul class=\"list-unstyled mb-0\">\n" +
        "                        <li>\n" +
        "                            <a href=\"\">PhpStorm</a>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <a href=\"\">Android Studio</a>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <a href=\"\">MySql</a>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <a href=\"\">GitHub</a>\n" +
        "                        </li>\n" +
        "                    </ul>\n" +
        "                </div>\n" +
        "                <div class=\"col-sm-12 col-md-3 text-center\">\n" +
        "                    <h5>About</h5>\n" +
        "                    <ul class=\"list-unstyled mb-0\">\n" +
        "                        <li>\n" +
        "                            <a href=\"\">Meet The Monterail Team</a>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <a href=\"\">How we work</a>\n" +
        "                        </li>\n" +
        "                        <li>\n" +
        "                            <a href=\"\">Community, with love</a>\n" +
        "                        </li>\n" +
        "                    </ul>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <!-- footer second row end -->\n" +
        "\n" +
        "    <!-- footer third row start -->\n" +
        "    <div class=\"row bg-lightgray vh-20 d-flex align-items-center m-0\">\n" +
        "        <div class=\"col-sm-12 col-md-5\">\n" +
        "            <div class=\"mt-3 d-flex\">\n" +
        "                <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email\">\n" +
        "                <button class=\"btn btn-purple ml-3\" type=\"button\">Subscribe</button>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"col-sm-12 col-md-7\">\n" +
        "            <ul class=\"list-unstyled d-flex flex-row justify-content-end align-items-center mt-2\" id=\"social_icons\">\n" +
        "                <li>\n" +
        "                    <a href=\"#\">\n" +
        "                        <img src=\"asset/img/footer/facebook.png\" alt=\"\" class=\"img-fluid social-icon\">\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <a href=\"#\">\n" +
        "                        <img src=\"asset/img/footer/whatsapp.png\" alt=\"\" class=\"img-fluid social-icon\">\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <a href=\"#\">\n" +
        "                        <img src=\"asset/img/footer/linkedin.png\" alt=\"\" class=\"img-fluid social-icon\">\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <a href=\"#\">\n" +
        "                        <img src=\"asset/img/footer/twitter.png\" alt=\"\" class=\"img-fluid social-icon\">\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "                <li>\n" +
        "                    <a href=\"#\">\n" +
        "                        <img src=\"asset/img/footer/reddit.png\" alt=\"\" class=\"img-fluid social-icon\">\n" +
        "                    </a>\n" +
        "                </li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <!-- footer third row end -->\n" +
        "\n" +
        "    <!-- footer forth row start -->\n" +
        "    <div class=\"row bg-purple vh-8 m-0\">\n" +
        "        <div class=\"col d-flex justify-content-center align-items-center\">\n" +
        "            <p class=\"text-white mb-0\">&copy;TRC Solutions 2020</p>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <!-- footer forth row end -->\n" +
        "</div>\n" +
        "<!-- Footer Area End -->"
}

// .............Footer Section End

