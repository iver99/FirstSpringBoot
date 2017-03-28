<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <![endif]-->
    <title>FREE RESPONSIVE HORIZONTAL ADMIN</title>
    <!-- BOOTSTRAP CORE STYLE  -->
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
    <link href="//cdn.bootcss.com/datatables/1.10.13/css/dataTables.bootstrap.css" rel="stylesheet">
    <!-- FONT AWESOME STYLE  -->
    <link href="assets/css/font-awesome.css" rel="stylesheet" />

    <!-- CUSTOM STYLE  -->
    <link href="assets/css/style.css" rel="stylesheet" />
    <link href="assets/css/login-style.css" rel="stylesheet" />
    <link href="assets/css/animate-custom.css" rel="stylesheet" />
    <!-- GOOGLE FONT -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />

    <script src="https://cdn.static.runoob.com/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://cdn.static.runoob.com/libs/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</head>

<body>
    <!-- Login 模态框（Modal） -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <a class="hiddenanchor" id="toregister"></a>
            <a class="hiddenanchor" id="tologin"></a>
            <div id="wrapper" class="modal-content">
                <div id="login" class="animate form">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					           &times;
                        </button>
                        <h1>Log in</h1>
                    </div>

                    <form action="/login" method="post" autocomplete="on">
                        <p>
                            <label for="username" class="uname" data-icon="u"> Your email or username </label>
                            <input id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com" />
                        </p>
                        <p>
                            <label for="password" class="youpasswd" data-icon="p"> Your password </label>
                            <input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" />
                        </p>
                        <p class="keeplogin">
                            <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" />
                            <label for="loginkeeping">Keep me logged in</label>
                        </p>
                        <p class="login button">
                            <input type="submit" value="Login" />
                        </p>
                        <p class="change_link">
                            Not a member yet ?
                            <a href="#toregister" class="to_register">Join us</a>
                        </p>
                    </form>
                </div>

                <div id="register" class="animate form">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					           &times;
                        </button>
                        <h1>Sign up</h1>
                    </div>
                    <form action="/register" method="post" autocomplete="on">
                        <p>
                            <label for="usernamesignup" class="uname" data-icon="u">Your username</label>
                            <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="mysuperusername690" />
                        </p>
                        <p>
                            <label for="emailsignup" class="youmail" data-icon="e"> Your email</label>
                            <input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="mysupermail@mail.com" />
                        </p>
                        <p>
                            <label for="passwordsignup" class="youpasswd" data-icon="p">Your password </label>
                            <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="eg. X8df!90EO" />
                        </p>
                        <p>
                            <label for="passwordsignup_confirm" class="youpasswd" data-icon="p">Please confirm your password </label>
                            <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="eg. X8df!90EO" />
                        </p>
                        <p class="signin button">
                            <input type="submit" value="Sign up" />
                        </p>
                        <p class="change_link">
                            Already a member ?
                            <a href="#tologin" class="to_register"> Go and log in </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="navbar navbar-inverse set-radius-zero">
        <div class="container">

            <div class="w3layouts-logo header-line">
                <a href="index.html">OCH CLUB</a>
            </div>

            <div class="right-div">
                <div>
                    <a class="text-bold site-header-link" data-toggle="modal" href="#myModal">Sign in</a>
                    <#if name ?? && name != ''>
                        <span> name is: ${(name)!''}, password is : ${(pswd)!''}. welcome!</span>
                    </#if>
                    <#if KEY ?? && KEY != ''> 
                    <span> KEY is: ${(KEY)!''}, test model success!</span>
                    </#if>
                </div>
                <div>
                    <a class="site-header-link" href="#">Admin Entrance</a>
                </div>
            </div>
        </div>
    </div>
    <!-- LOGO HEADER END-->

    <section class="menu-section">
        <div class="container">
            <div class="row ">
                <div class="col-md-12">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    </div>
                    <div class="navbar-collapse collapse ">
                        <ul id="menu-top" class="nav navbar-nav navbar-left">
                            <li><a href="index.html" class="menu-top-active">HOME</a></li>
                            <li><a href="#announcements">Announcements</a>
                            <li><a href="#activities">Activities</a></li>
                            <li><a href="tab.html">My activities</a></li>
                            <li><a href="table.html">MY ACCOUNT</a>
                            <li><a href="#contact-us">Contact us</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <!-- MENU SECTION END-->

    <div class="content-wrapper">
        <div class="container">
            <div id="hot-activities" class="marg-botm">
                <div class="hot-activities-heading">
                    <h3>Hot Activities</h3>
                </div>
                <div id="carousel-example" class="carousel slide slide-bdr" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="item active">
                            <img src="assets/img/1.jpg" href="#" alt="" /> </div>
                        <div class="item">
                            <img src="assets/img/2.jpg" href="#" alt="" />
                        </div>
                        <div class="item">
                            <img src="assets/img/3.jpg" href="#" alt="" />
                        </div>
                    </div>
                    <!--INDICATORS-->
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example" data-slide-to="1"></li>
                        <li data-target="#carousel-example" data-slide-to="2"></li>
                    </ol>
                    <!--PREVIUS-NEXT BUTTONS-->
                    <a class="left carousel-control" href="#carousel-example" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                    </a>
                    <a class="right carousel-control" href="#carousel-example" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                    </a>
                </div>
            </div>
            <div id="announcement" class="marg-botm">
                <div class="announcement-heading">
                    <h3>Announcements</h3>
                </div>


                <div class="announcement-list announcement-list-autoScroll">
                    <ul class="">
                        <li class="">
                            <div class="announcement-date-line">
                                <div id="accouncement-date">April 6th,2017</div>
                                <div>&nbsp:</div>
                            </div>
                            <br/>
                            <div class="announcement-text">
                                <p>这是第一条通知！</p>
                            </div>

                        </li>
                        <li class="">
                            <div class="announcement-date-line">
                                <div id="accouncement-date">April 6th,2017</div>
                                <div>&nbsp:</div>
                            </div>
                            <br/>
                            <div class="announcement-text">
                                <p>这是第二条通知！</p>
                            </div>

                        </li>
                        <li class="">
                            <div class="announcement-date-line">
                                <div id="accouncement-date">April 6th,2017</div>
                                <div>&nbsp:</div>
                            </div>
                            <br/>
                            <div class="announcement-text">
                                <p>这是第三条通知！</p>
                            </div>

                        </li>
                        <li class="">
                            <div class="announcement-date-line">
                                <div id="accouncement-date">April 6th,2017</div>
                                <div>&nbsp:</div>
                            </div>
                            <br/>
                            <div class="announcement-text">
                                <p>这是第四条通知！</p>
                            </div>

                        </li>
                        <li class="">
                            <div class="announcement-date-line">
                                <div id="accouncement-date">April 6th,2017</div>
                                <div>&nbsp:</div>
                            </div>
                            <br/>
                            <div class="announcement-text">
                                <p>这是第五条通知！</p>
                            </div>

                        </li>
                        <li class="">
                            <div class="announcement-date-line">
                                <div id="accouncement-date">April 6th,2017</div>
                                <div>&nbsp:</div>
                            </div>
                            <br/>
                            <div class="announcement-text">
                                <p>这是第六条通知！</p>
                            </div>

                        </li>
                        <li class="">
                            <div class="announcement-date-line">
                                <div id="accouncement-date">April 6th,2017</div>
                                <div>&nbsp:</div>
                            </div>
                            <br/>
                            <div class="announcement-text">
                                <p>这是第七条通知！</p>
                            </div>

                        </li>
                        <li class="">
                            <div class="announcement-date-line">
                                <div id="accouncement-date">April 6th,2017</div>
                                <div>&nbsp:</div>
                            </div>
                            <br/>
                            <div class="announcement-text">
                                <p>这是第八条通知！</p>
                            </div>

                        </li>
                        <li class="">
                            <div class="announcement-date-line">
                                <div id="accouncement-date">April 6th,2017</div>
                                <div>&nbsp:</div>
                            </div>
                            <br/>
                            <div class="announcement-text">
                                <p>这是第九条通知！</p>
                            </div>

                        </li>
                        <li class="">
                            <div class="announcement-date-line">
                                <div id="accouncement-date">April 6th,2017</div>
                                <div>&nbsp:</div>
                            </div>
                            <br/>
                            <div class="announcement-text">
                                <p>这是第十条通知！</p>
                            </div>

                        </li>

                    </ul>
                </div>

            </div>

            <div id="activities" class="marg-botm">
                <div class="activities-heading">
                    <h3>Activities</h3>
                </div>
                <div class="announcement-list">
                    <ul id="activities-list">
                        <li>

                            <div class="news-left-top-text">
                                <a id="activity-title" href="#" data-toggle="modal" data-target="#activityDetailModal">This is an activity title.</a>
                            </div>
                            <div class="date-grid">
                                <div class="admin">
                                    <p id="activity-manager"><i class="fa fa-user" aria-hidden="true"></i> Admin</p>
                                </div>
                                <div class="time">
                                    <p id="activity-publish-date"><i class="fa fa-calendar" aria-hidden="true"></i> Apr 09,2017</p>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                            <div class="news-grid-info-bottom-text news-text-overflow">
                                <p id="activity-description">Activity description: this is test info this is test info this is test info this is test info this is test info this is test info this is test info this is test info this is test info this is test info this is test info this is test info this is test info this is test info this is test info this is test info this is test info this is test info this is test infothis is test info this is test info this is test info this is test info this is test info this is test info this is test info this is test infothis is test info </p>
                            </div>

                        </li>
                    </ul>
                </div>

            </div>
            <div class="modal fade" id="activityDetailModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                <div  class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					           &times;
                        </button>
                        <h2>待完善：Activity Detail弹窗</h2>
                    </div>
                    </div>
                </div>
            </div>
            <div id="contact-us" class="marg-botm">
                <div class="contact-heading">
                    <h3>Contact us</h3>
                </div>
                
                <div class="contact-us-form">
                        <form role="form">
                            <div class="form-group">
                                <label>Enter Name</label>
                                <input class="form-control" type="text" />
                            </div>
                            <div class="form-group">
                                <label>Enter Email</label>
                                <input class="form-control" type="text" />
                            </div>
                            <div class="form-group">
                                <label>Subject</label>
                                <input class="form-control" type="text" />
                            </div>
                            <div class="form-group">
                                <label>Enter Message</label>
                                <input class="form-control" type="text" style="min-height:100px;" />
                            </div>

                            <div class="form-group">
                                <label>Attach File </label>
                                <input type="file" />
                            </div>

                            <div class="form-group">
                                <label>For Role </label>
                                <div class="checkbox">
                                    <label>
                                                    <input type="checkbox" value="" />Webmaster 
                                                </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                                    <input type="checkbox" value="" />Admin
                                                </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                                    <input type="checkbox" value="" />Employee
                                                </label>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-success">Send Message </button>
                            <button type="reset" class="btn btn-primary">Reset Fields</button>

                        </form>
                </div>
        </div>
        

        
    </div>
    <!-- CONTENT-WRAPPER SECTION END-->
    <section class="footer-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    &copy; 2017 OCH Hackathon | <a href="http://www.oracle.com/" target="_blank" title="模板之家">Oracle</a></div>

            </div>
        </div>
    </section>
    <!-- FOOTER SECTION END-->
    <!-- JAVASCRIPT FILES PLACED AT THE BOTTOM TO REDUCE THE LOADING TIME  -->
    <!-- CORE JQUERY  -->
    <script src="assets/js/jquery-1.10.2.js"></script>
    <!-- BOOTSTRAP SCRIPTS  -->
    <script src="assets/js/bootstrap.js"></script>
    <!-- CUSTOM SCRIPTS  -->
    <script src="assets/js/custom.js"></script>

</body>
</html>
