<template>
  <body  class="vertical-layout vertical-menu-modern 2-columns  navbar-floating footer-static  " data-open="click" data-menu="vertical-menu-modern" data-col="2-columns">
  <!-- BEGIN: Content-->
  <div v-if="state === 'login'" class="app-content content">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
      </div>
      <div class="content-body">
        <section class="row flexbox-container">
          <div class="col-xl-8 col-11 d-flex justify-content-center">
            <div class="card bg-authentication rounded-0 mb-0">
              <div class="row m-0">
                <div class="col-lg-6 d-lg-block d-none text-center align-self-center px-1 py-0">
                  <img src="/app-assets/images/pages/login.png" alt="branding logo">
                </div>
                <div class="col-lg-6 col-12 p-0">
                  <div class="card rounded-0 mb-0 px-2">
                    <div class="card-header pb-1">
                      <div class="card-title">
                        <h4 class="mb-0">Login</h4>
                      </div>
                    </div>
                    <p class="px-2">Welcome back, please login to your account.</p>
                    <div class="card-content">
                      <div class="card-body pt-1">
                        <form>
                          <fieldset class="form-label-group form-group position-relative has-icon-left">
                            <input type="email" class="form-control" id="user-name" placeholder="Email" required v-model="client.email">
                            <div class="form-control-position">
                              <i class="feather icon-user"></i>
                            </div>
                            <label for="user-name">Username</label>
                          </fieldset>

                          <fieldset class="form-label-group position-relative has-icon-left">
                            <input type="password" class="form-control" id="user-password" v-model="client.password" placeholder="Password" required>
                            <div class="form-control-position">
                              <i class="feather icon-lock"></i>
                            </div>
                            <label for="user-password">Password</label>
                          </fieldset>
                          <!--
                          <div class="form-group d-flex justify-content-between align-items-center">
                            <div class="text-left">
                              <fieldset class="checkbox">
                                <div class="vs-checkbox-con vs-checkbox-primary">
                                  <input type="checkbox">
                                  <span class="vs-checkbox">
                                      <span class="vs-checkbox--check">
                                          <i class="vs-icon feather icon-check"></i>
                                      </span>
                                  </span>
                                  <span class="">Remember me</span>
                                </div>
                              </fieldset>
                            </div>
                            <div class="text-right"><a href="auth-forgot-password.html" class="card-link">Forgot Password?</a></div>
                          </div>-->
                          <a class="btn btn-outline-primary float-left btn-inline" v-on:click="openRegister()">Register</a>
                          <button class="btn btn-primary float-right btn-inline" v-on:click="login($event)">Login</button>
                        </form>
                      </div>
                    </div>
                    <div class="login-footer">
                      <div class="divider">
                        <div class="divider-text">OR</div>
                      </div>
                      <div class="footer-btn d-inline">
                        <a href="#" class="btn btn-facebook"><span class="fa fa-facebook"></span></a>
                        <a href="#" class="btn btn-twitter white"><span class="fa fa-twitter"></span></a>
                        <a href="#" class="btn btn-google"><span class="fa fa-google"></span></a>
                        <a href="#" class="btn btn-github"><span class="fa fa-github-alt"></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>

  <div v-if="state === 'register'" class="app-content content">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
      </div>
      <div class="content-body">
        <section class="row flexbox-container">
          <div class="col-xl-8 col-10 d-flex justify-content-center">
            <div class="card bg-authentication rounded-0 mb-0">
              <div class="row m-0">
                <div class="col-lg-6 d-lg-block d-none text-center align-self-center pl-0 pr-3 py-0">
                  <img src="/app-assets/images/pages/register.jpg" alt="branding logo">
                </div>
                <div class="col-lg-6 col-12 p-0">
                  <div class="card rounded-0 mb-0 p-2">
                    <div class="card-header pt-50 pb-1">
                      <div class="card-title">
                        <h4 class="mb-0">Create Account</h4>
                      </div>
                    </div>
                    <p class="px-2">Fill the below form to create a new account.</p>
                    <div class="card-content">
                      <div class="card-body pt-0">
                        <form>
                          <div class="form-label-group">
                            <input type="text" id="inputName" class="form-control" placeholder="Name" required v-model="client.name">
                            <label for="inputName">Name</label>
                          </div>
                          <div class="form-label-group">
                            <input type="email" id="inputEmail" class="form-control" placeholder="Email" required v-model="client.email">
                            <label for="inputEmail">Email</label>
                          </div>
                          <div class="form-label-group">
                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="client.password">
                            <label for="inputPassword">Password</label>
                          </div>
                          <div class="form-label-group">
                            <input type="password" id="inputConfPassword" class="form-control" placeholder="Confirm Password" required v-model="client.passwordRep">
                            <label for="inputConfPassword">Confirm Password</label>
                          </div>
                          <div class="form-group row">
                            <div class="col-12">
                              <fieldset class="checkbox">
                                <div class="vs-checkbox-con vs-checkbox-primary">
                                  <input type="checkbox" checked>
                                  <span class="vs-checkbox">
                                      <span class="vs-checkbox--check">
                                          <i class="vs-icon feather icon-check"></i>
                                      </span>
                                  </span>
                                  <span class=""> I accept the terms & conditions.</span>
                                </div>
                              </fieldset>
                            </div>
                          </div>
                          <a v-on:click="openLogin()" class="btn btn-outline-primary float-left btn-inline mb-50">Login</a>
                          <a v-on:click="register($event)" class="btn btn-primary float-right btn-inline mb-50">Register</a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>

  <!-- BEGIN: Header-->
  <div v-if="state === 'index'">
  <nav class="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nav navbar-light navbar-shadow">
    <div class="navbar-wrapper">
      <div class="navbar-container content">
        <div class="navbar-collapse" id="navbar-mobile">
          <div class="mr-auto float-left bookmark-wrapper d-flex align-items-center">
            <ul class="nav navbar-nav">
              <li class="nav-item mobile-menu d-xl-none mr-auto"><a class="nav-link nav-menu-main menu-toggle hidden-xs" href="#"><i class="ficon feather icon-menu"></i></a></li>
            </ul>
            <ul class="nav navbar-nav bookmark-icons">
              <!-- li.nav-item.mobile-menu.d-xl-none.mr-auto-->
              <!--   a.nav-link.nav-menu-main.menu-toggle.hidden-xs(href='#')-->
              <!--     i.ficon.feather.icon-menu-->
              <li class="nav-item d-none d-lg-block"><a class="nav-link" href="telegram.html" data-toggle="tooltip" data-placement="top" title="Telegram"><i class="ficon feather icon-navigation"></i></a></li>
              <li class="nav-item d-none d-lg-block"><a class="nav-link" href="youtube.html" data-toggle="tooltip" data-placement="top" title="YouTube"><i class="ficon feather icon-film"></i></a></li>
              <li class="nav-item d-none d-lg-block"><a class="nav-link" href="instagram.html" data-toggle="tooltip" data-placement="top" title="Instagram"><i class="ficon feather icon-instagram"></i></a></li>
              <li class="nav-item d-none d-lg-block"><a class="nav-link" href="moderation.html" data-toggle="tooltip" data-placement="top" title="Moderation"><i class="ficon feather icon-check-square"></i></a></li>
            </ul>
            <!--<ul class="nav navbar-nav">
                <li class="nav-item d-none d-lg-block"><a class="nav-link bookmark-star"><i class="ficon feather icon-star warning"></i></a>
                    <div class="bookmark-input search-input">
                        <div class="bookmark-input-icon"><i class="feather icon-search primary"></i></div>
                        <input class="form-control input" type="text" placeholder="Explore Vuexy..." tabindex="0" data-search="template-list">
                        <ul class="search-list search-list-bookmark"></ul>
                    </div>
                </li>
            </ul>-->
          </div>
          <ul class="nav navbar-nav float-right">
            <li class="dropdown dropdown-language nav-item"><a class="dropdown-toggle nav-link" id="dropdown-flag" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="flag-icon flag-icon-us"></i><span class="selected-language">English</span></a>
              <div class="dropdown-menu" aria-labelledby="dropdown-flag"><a class="dropdown-item" href="#" data-language="en"><i class="flag-icon flag-icon-us"></i> English</a><a class="dropdown-item" href="#" data-language="fr"><i class="flag-icon flag-icon-fr"></i> French</a><a class="dropdown-item" href="#" data-language="de"><i class="flag-icon flag-icon-de"></i> German</a><a class="dropdown-item" href="#" data-language="pt"><i class="flag-icon flag-icon-pt"></i> Portuguese</a></div>
            </li>
            <li class="nav-item d-none d-lg-block"><a class="nav-link nav-link-expand"><i class="ficon feather icon-maximize"></i></a></li>
            <li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
              <div class="user-nav d-sm-flex d-none"><span class="user-name text-bold-600">John Doe</span><span class="user-status">Available</span></div><span><img class="round" src="/app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height="40" width="40"></span>
            </a>
              <div class="dropdown-menu dropdown-menu-right"><a class="dropdown-item" href="page-user-profile.html"><i class="feather icon-user"></i> Edit Profile</a><a class="dropdown-item" href="app-email.html"><i class="feather icon-mail"></i> My Inbox</a><a class="dropdown-item" href="app-todo.html"><i class="feather icon-check-square"></i> Task</a><a class="dropdown-item" href="app-chat.html"><i class="feather icon-message-square"></i> Chats</a>
                <div class="dropdown-divider"></div><a class="dropdown-item" href="auth-login.html"><i class="feather icon-power"></i> Logout</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <ul class="main-search-list-defaultlist d-none">
    <li class="d-flex align-items-center"><a class="pb-25" href="#">
      <h6 class="text-primary mb-0">Files</h6>
    </a></li>
    <li class="auto-suggestion d-flex align-items-center cursor-pointer"><a class="d-flex align-items-center justify-content-between w-100" href="#">
      <div class="d-flex">
        <div class="mr-50"><img src="/app-assets/images/icons/xls.png" alt="png" height="32"></div>
        <div class="search-data">
          <p class="search-data-title mb-0">Two new item submitted</p><small class="text-muted">Marketing Manager</small>
        </div>
      </div><small class="search-data-size mr-50 text-muted">&apos;17kb</small>
    </a></li>
    <li class="auto-suggestion d-flex align-items-center cursor-pointer"><a class="d-flex align-items-center justify-content-between w-100" href="#">
      <div class="d-flex">
        <div class="mr-50"><img src="/app-assets/images/icons/jpg.png" alt="png" height="32"></div>
        <div class="search-data">
          <p class="search-data-title mb-0">52 JPG file Generated</p><small class="text-muted">FontEnd Developer</small>
        </div>
      </div><small class="search-data-size mr-50 text-muted">&apos;11kb</small>
    </a></li>
    <li class="auto-suggestion d-flex align-items-center cursor-pointer"><a class="d-flex align-items-center justify-content-between w-100" href="#">
      <div class="d-flex">
        <div class="mr-50"><img src="/app-assets/images/icons/pdf.png" alt="png" height="32"></div>
        <div class="search-data">
          <p class="search-data-title mb-0">25 PDF File Uploaded</p><small class="text-muted">Digital Marketing Manager</small>
        </div>
      </div><small class="search-data-size mr-50 text-muted">&apos;150kb</small>
    </a></li>
    <li class="auto-suggestion d-flex align-items-center cursor-pointer"><a class="d-flex align-items-center justify-content-between w-100" href="#">
      <div class="d-flex">
        <div class="mr-50"><img src="/app-assets/images/icons/doc.png" alt="png" height="32"></div>
        <div class="search-data">
          <p class="search-data-title mb-0">Anna_Strong.doc</p><small class="text-muted">Web Designer</small>
        </div>
      </div><small class="search-data-size mr-50 text-muted">&apos;256kb</small>
    </a></li>
    <li class="d-flex align-items-center"><a class="pb-25" href="#">
      <h6 class="text-primary mb-0">Members</h6>
    </a></li>
    <li class="auto-suggestion d-flex align-items-center cursor-pointer"><a class="d-flex align-items-center justify-content-between py-50 w-100" href="#">
      <div class="d-flex align-items-center">
        <div class="avatar mr-50"><img src="/app-assets/images/portrait/small/avatar-s-8.jpg" alt="png" height="32"></div>
        <div class="search-data">
          <p class="search-data-title mb-0">John Doe</p><small class="text-muted">UI designer</small>
        </div>
      </div>
    </a></li>
    <li class="auto-suggestion d-flex align-items-center cursor-pointer"><a class="d-flex align-items-center justify-content-between py-50 w-100" href="#">
      <div class="d-flex align-items-center">
        <div class="avatar mr-50"><img src="/app-assets/images/portrait/small/avatar-s-1.jpg" alt="png" height="32"></div>
        <div class="search-data">
          <p class="search-data-title mb-0">Michal Clark</p><small class="text-muted">FontEnd Developer</small>
        </div>
      </div>
    </a></li>
    <li class="auto-suggestion d-flex align-items-center cursor-pointer"><a class="d-flex align-items-center justify-content-between py-50 w-100" href="#">
      <div class="d-flex align-items-center">
        <div class="avatar mr-50"><img src="/app-assets/images/portrait/small/avatar-s-14.jpg" alt="png" height="32"></div>
        <div class="search-data">
          <p class="search-data-title mb-0">Milena Gibson</p><small class="text-muted">Digital Marketing Manager</small>
        </div>
      </div>
    </a></li>
    <li class="auto-suggestion d-flex align-items-center cursor-pointer"><a class="d-flex align-items-center justify-content-between py-50 w-100" href="#">
      <div class="d-flex align-items-center">
        <div class="avatar mr-50"><img src="/app-assets/images/portrait/small/avatar-s-6.jpg" alt="png" height="32"></div>
        <div class="search-data">
          <p class="search-data-title mb-0">Anna Strong</p><small class="text-muted">Web Designer</small>
        </div>
      </div>
    </a></li>
  </ul>
  <ul class="main-search-list-defaultlist-other-list d-none">
    <li class="auto-suggestion d-flex align-items-center justify-content-between cursor-pointer"><a class="d-flex align-items-center justify-content-between w-100 py-50">
      <div class="d-flex justify-content-start"><span class="mr-75 feather icon-alert-circle"></span><span>No results found.</span></div>
    </a></li>
  </ul>
  <!-- END: Header-->


  <!-- BEGIN: Main Menu-->
  <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-scroll-to-active="true">
    <div class="navbar-header">
      <ul class="nav navbar-nav flex-row">
        <li class="nav-item mr-auto"><a class="navbar-brand" href="/html/ltr/vertical-menu-template/index2.html">
          <!--<div class="brand-logo"></div>-->
          <h2 class="brand-text mb-0">Zapp.Money</h2>
        </a></li>
        <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"></i><i class="toggle-icon feather icon-disc font-medium-4 d-none d-xl-block collapse-toggle-icon primary" data-ticon="icon-disc"></i></a></li>
      </ul>
    </div>
    <div class="shadow-bottom"></div>
    <div class="main-menu-content">
      <ul class="navigation navigation-main" id="main-menu-navigation" data-menu="menu-navigation">
        <li class=" nav-item"><a href="index2.html"><i class="feather icon-home"></i><span class="menu-title" data-i18n="Dashboard">Dashboard</span><span class="badge badge badge-warning badge-pill float-right mr-2"></span></a>
          <ul class="menu-content">
            <!--<li><a href="dashboard-analytics.html"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Analytics">Analytics</span></a>
            </li>-->
            <li class="active"><a href="index2.html"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="eCommerce">Statistics</span></a>
            </li>
          </ul>
        </li>
        <!--<li class=" navigation-header"><span>Apps</span>
        </li>
        <li class=" nav-item"><a href="app-email.html"><i class="feather icon-mail"></i><span class="menu-title" data-i18n="Email">Email</span></a>
        </li>
        <li class=" nav-item"><a href="app-chat.html"><i class="feather icon-message-square"></i><span class="menu-title" data-i18n="Chat">Chat</span></a>
        </li>
        <li class=" nav-item"><a href="app-todo.html"><i class="feather icon-check-square"></i><span class="menu-title" data-i18n="Todo">Todo</span></a>
        </li>
        <li class=" nav-item"><a href="app-calender.html"><i class="feather icon-calendar"></i><span class="menu-title" data-i18n="Calender">Calender</span></a>
        </li>
        <li class=" nav-item"><a href="#"><i class="feather icon-shopping-cart"></i><span class="menu-title" data-i18n="Ecommerce">Ecommerce</span></a>
            <ul class="menu-content">
                <li><a href="app-ecommerce-shop.html"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Shop">Shop</span></a>
                </li>
                <li><a href="app-ecommerce-details.html"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Details">Details</span></a>
                </li>
                <li><a href="app-ecommerce-wishlist.html"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Wish List">Wish List</span></a>
                </li>
                <li><a href="app-ecommerce-checkout.html"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Checkout">Checkout</span></a>
                </li>
            </ul>
        </li>
        <li class=" nav-item"><a href="#"><i class="feather icon-user"></i><span class="menu-title" data-i18n="User">User</span></a>
            <ul class="menu-content">
                <li><a href="app-user-list.html"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="List">List</span></a>
                </li>
                <li><a href="app-user-view.html"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="View">View</span></a>
                </li>
                <li><a href="app-user-edit.html"><i class="feather icon-circle"></i><span class="menu-item" data-i18n="Edit">Edit</span></a>
                </li>
            </ul>
        </li>-->
        <li class=" navigation-header"><span>Assets</span>
        </li>

        <li class="nav-item"><a href="wallet.html"><i class="feather icon-battery"></i><span class="menu-title" data-i18n="Wallet">My wallet</span></a>
        </li>
        <li class="nav-item"><a href="coins.html"><i class="feather icon-plus-square"></i><span class="menu-title" data-i18n="Create coins">Create coins</span></a>
        </li>

        <li class=" navigation-header"><span>Platforms</span>
        </li>

        <li class="nav-item"><a href="telegram.html"><i class="feather icon-navigation"></i><span class="menu-title" data-i18n="Telegram">Telegram</span></a>
        </li>
        <li class="nav-item"><a href="youtube.html"><i class="feather icon-film"></i><span class="menu-title" data-i18n="YouTube">YouTube</span></a>
        </li>
        <li class="nav-item"><a href="instagram.html"><i class="feather icon-instagram"></i><span class="menu-title" data-i18n="Instagram">Instagram</span></a>
        </li>
        <li class="nav-item"><a href="moderation.html"><i class="feather icon-check-square"></i><span class="menu-title" data-i18n="Moderation">Moderation</span></a>
        </li>
      </ul>
    </div>
  </div>
  <!-- END: Main Menu-->

  <!-- BEGIN: Content-->
  <div class="app-content content">
    <div class="content-overlay"></div>
    <div class="header-navbar-shadow"></div>
    <div class="content-wrapper">
      <div class="content-header row">
      </div>
      <div class="content-body">
        <!-- Dashboard Ecommerce Starts -->
        <section id="dashboard-ecommerce">
          <div class="row">
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-header d-flex flex-column align-items-start pb-0">
                  <div class="avatar bg-rgba-primary p-50 m-0">
                    <div class="avatar-content">
                      <i class="feather icon-users text-primary font-medium-5"></i>
                    </div>
                  </div>
                  <h2 class="text-bold-700 mt-1">92.6k</h2>
                  <p class="mb-0">Subscribers Gained</p>
                </div>
                <div class="card-content">
                  <div id="line-area-chart-1"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-header d-flex flex-column align-items-start pb-0">
                  <div class="avatar bg-rgba-success p-50 m-0">
                    <div class="avatar-content">
                      <i class="feather icon-credit-card text-success font-medium-5"></i>
                    </div>
                  </div>
                  <h2 class="text-bold-700 mt-1">97.5k</h2>
                  <p class="mb-0">Revenue Generated</p>
                </div>
                <div class="card-content">
                  <div id="line-area-chart-2"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-header d-flex flex-column align-items-start pb-0">
                  <div class="avatar bg-rgba-danger p-50 m-0">
                    <div class="avatar-content">
                      <i class="feather icon-shopping-cart text-danger font-medium-5"></i>
                    </div>
                  </div>
                  <h2 class="text-bold-700 mt-1">36%</h2>
                  <p class="mb-0">Quarterly Sales</p>
                </div>
                <div class="card-content">
                  <div id="line-area-chart-3"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="card">
                <div class="card-header d-flex flex-column align-items-start pb-0">
                  <div class="avatar bg-rgba-warning p-50 m-0">
                    <div class="avatar-content">
                      <i class="feather icon-package text-warning font-medium-5"></i>
                    </div>
                  </div>
                  <h2 class="text-bold-700 mt-1">97.5K</h2>
                  <p class="mb-0">Orders Received</p>
                </div>
                <div class="card-content">
                  <div id="line-area-chart-4"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 col-md-6 col-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between align-items-end">
                  <h4 class="card-title">Revenue</h4>
                  <p class="font-medium-5 mb-0"><i class="feather icon-settings text-muted cursor-pointer"></i></p>
                </div>
                <div class="card-content">
                  <div class="card-body pb-0">
                    <div class="d-flex justify-content-start">
                      <div class="mr-2">
                        <p class="mb-50 text-bold-600">This Month</p>
                        <h2 class="text-bold-400">
                          <sup class="font-medium-1">$</sup>
                          <span class="text-success">86,589</span>
                        </h2>
                      </div>
                      <div>
                        <p class="mb-50 text-bold-600">Last Month</p>
                        <h2 class="text-bold-400">
                          <sup class="font-medium-1">$</sup>
                          <span>73,683</span>
                        </h2>
                      </div>

                    </div>
                    <div id="revenue-chart"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between align-items-end">
                  <h4 class="mb-0">Goal Overview</h4>
                  <p class="font-medium-5 mb-0"><i class="feather icon-help-circle text-muted cursor-pointer"></i></p>
                </div>
                <div class="card-content">
                  <div class="card-body px-0 pb-0">
                    <div id="goal-overview-chart" class="mt-75"></div>
                    <div class="row text-center mx-0">
                      <div class="col-6 border-top border-right d-flex align-items-between flex-column py-1">
                        <p class="mb-50">Completed</p>
                        <p class="font-large-1 text-bold-700">786,617</p>
                      </div>
                      <div class="col-6 border-top d-flex align-items-between flex-column py-1">
                        <p class="mb-50">In Progress</p>
                        <p class="font-large-1 text-bold-700">13,561</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Browser Statistics</h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <div class="d-flex justify-content-between mb-25">
                      <div class="browser-info">
                        <p class="mb-25">Google Chrome</p>
                        <h4>73%</h4>
                      </div>
                      <div class="stastics-info text-right">
                        <span>800 <i class="feather icon-arrow-up text-success"></i></span>
                        <span class="text-muted d-block">13:16</span>
                      </div>
                    </div>
                    <div class="progress progress-bar-primary mb-2">
                      <div class="progress-bar" role="progressbar" aria-valuenow="73" aria-valuemin="73" aria-valuemax="100" style="width:73%"></div>
                    </div>
                    <div class="d-flex justify-content-between mb-25">
                      <div class="browser-info">
                        <p class="mb-25">Opera</p>
                        <h4>8%</h4>
                      </div>
                      <div class="stastics-info text-right">
                        <span>-200 <i class="feather icon-arrow-down text-danger"></i></span>
                        <span class="text-muted d-block">13:16</span>
                      </div>
                    </div>
                    <div class="progress progress-bar-primary mb-2">
                      <div class="progress-bar" role="progressbar" aria-valuenow="8" aria-valuemin="8" aria-valuemax="100" style="width:8%"></div>
                    </div>
                    <div class="d-flex justify-content-between mb-25">
                      <div class="browser-info">
                        <p class="mb-25">Firefox</p>
                        <h4>19%</h4>
                      </div>
                      <div class="stastics-info text-right">
                        <span>100 <i class="feather icon-arrow-up text-success"></i></span>
                        <span class="text-muted d-block">13:16</span>
                      </div>
                    </div>
                    <div class="progress progress-bar-primary mb-2">
                      <div class="progress-bar" role="progressbar" aria-valuenow="19" aria-valuemin="19" aria-valuemax="100" style="width:19%"></div>
                    </div>
                    <div class="d-flex justify-content-between mb-25">
                      <div class="browser-info">
                        <p class="mb-25">Internet Explorer</p>
                        <h4>27%</h4>
                      </div>
                      <div class="stastics-info text-right">
                        <span>-450 <i class="feather icon-arrow-down text-danger"></i></span>
                        <span class="text-muted d-block">13:16</span>
                      </div>
                    </div>
                    <div class="progress progress-bar-primary mb-50">
                      <div class="progress-bar" role="progressbar" aria-valuenow="27" aria-valuemin="27" aria-valuemax="100" style="width:27%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8 col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Client Retention</h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <div id="client-retention-chart">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between align-items-end">
                  <h4>Sessions By Device</h4>
                  <div class="dropdown chart-dropdown">
                    <button class="btn btn-sm border-0 dropdown-toggle px-0" type="button" id="dropdownItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Last 7 Days
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownItem1">
                      <a class="dropdown-item" href="#">Last 28 Days</a>
                      <a class="dropdown-item" href="#">Last Month</a>
                      <a class="dropdown-item" href="#">Last Year</a>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <div class="card-body pt-0">
                    <div id="session-chart" class="mb-1"></div>
                    <div class="chart-info d-flex justify-content-between mb-1">
                      <div class="series-info d-flex align-items-center">
                        <i class="feather icon-monitor font-medium-2 text-primary"></i>
                        <span class="text-bold-600 mx-50">Desktop</span>
                        <span> - 58.6%</span>
                      </div>
                      <div class="series-result">
                        <span>2%</span>
                        <i class="feather icon-arrow-up text-success"></i>
                      </div>
                    </div>
                    <div class="chart-info d-flex justify-content-between mb-1">
                      <div class="series-info d-flex align-items-center">
                        <i class="feather icon-tablet font-medium-2 text-warning"></i>
                        <span class="text-bold-600 mx-50">Mobile</span>
                        <span> - 34.9%</span>
                      </div>
                      <div class="series-result">
                        <span>8%</span>
                        <i class="feather icon-arrow-up text-success"></i>
                      </div>
                    </div>
                    <div class="chart-info d-flex justify-content-between mb-50">
                      <div class="series-info d-flex align-items-center">
                        <i class="feather icon-tablet font-medium-2 text-danger"></i>
                        <span class="text-bold-600 mx-50">Tablet</span>
                        <span> - 6.5%</span>
                      </div>
                      <div class="series-result">
                        <span>-5%</span>
                        <i class="feather icon-arrow-down text-danger"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-12">
              <div class="card">
                <div class="card-header d-flex justify-content-between pb-0">
                  <h4 class="card-title">Customers</h4>
                  <div class="dropdown chart-dropdown">
                    <button class="btn btn-sm border-0 dropdown-toggle px-0" type="button" id="dropdownItem3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Last 7 Days
                    </button>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownItem3">
                      <a class="dropdown-item" href="#">Last 28 Days</a>
                      <a class="dropdown-item" href="#">Last Month</a>
                      <a class="dropdown-item" href="#">Last Year</a>
                    </div>
                  </div>
                </div>
                <div class="card-content">
                  <div class="card-body py-0">
                    <div id="customer-chart"></div>
                  </div>
                  <ul class="list-group list-group-flush customer-info">
                    <li class="list-group-item d-flex justify-content-between ">
                      <div class="series-info">
                        <i class="fa fa-circle font-small-3 text-primary"></i>
                        <span class="text-bold-600">New</span>
                      </div>
                      <div class="product-result">
                        <span>890</span>
                      </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between ">
                      <div class="series-info">
                        <i class="fa fa-circle font-small-3 text-warning"></i>
                        <span class="text-bold-600">Returning</span>
                      </div>
                      <div class="product-result">
                        <span>258</span>
                      </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between ">
                      <div class="series-info">
                        <i class="fa fa-circle font-small-3 text-danger"></i>
                        <span class="text-bold-600">Referrals</span>
                      </div>
                      <div class="product-result">
                        <span>149</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Dashboard Ecommerce ends -->

      </div>
    </div>
  </div>
  <!-- END: Content-->

  <div class="sidenav-overlay"></div>
  <div class="drag-target"></div>

  <!-- BEGIN: Footer-->
  <footer class="footer footer-static footer-light">
    <p class="clearfix blue-grey lighten-2 mb-0"><span class="float-md-left d-block d-md-inline-block mt-25">COPYRIGHT &copy; 2020<a class="text-bold-800 grey darken-2" href="https://motherminter.org/" target="_blank">Mother Minter,</a>All rights Reserved</span><span class="float-md-right d-none d-md-block">Hand-crafted & Made with<i class="feather icon-heart pink"></i></span>
      <button class="btn btn-primary btn-icon scroll-top" type="button"><i class="feather icon-arrow-up"></i></button>
    </p>
  </footer>
  <!-- END: Footer-->

  </div>

  <!-- END: Content-->
  <b-modal id="error" title="Error" header-bg-variant='danger'>
    <p class="my-4">{{ errorMessage }}</p>
  </b-modal>

  </body>
</template>

<script>
  import * as core from './core'
  import { SHA256 } from 'crypto-js'

  export default {
    components: {
    },
    data () {
      return {
        state: 'login',
        client: {
          name: '',
          email: '',
          password: '',
          passwordRep: '',
          passwordHash: '',
        },
        errorMessage: '',
        fp: '',
      }
    },
    computed: {
      currentLang() {
        return this.$i18n.locale
      },
    },
    created () {
      this.state = 'login'

      core.getFingerPrint()
        .then((fp) => {
          this.fp = fp

        })
    },
    filters: {
    },
    // method
    methods: {
      async login (event) {
        if (event) {
          event.preventDefault()
        }
        try {
          this.client.passwordHash = core.getPasswordHash(this.client.password)
          const response = await core.login(this.client.email, this.client.passwordHash)
          this.openIndex()
        } catch (error) {
          console.error(error)
          this.errorMessage = error
          this.$bvModal.show('error')
        }
        return false;
      },
      async register(event) {
        if (event) {
          event.preventDefault()
        }
        if (this.client.password !== this.client.passwordRep) {
          return false;
        }
        try {
          this.client.passwordHash = core.getPasswordHash(this.client.password)
          const response = await core.register(this.client)
          this.openIndex()
        } catch (error) {
          console.error(error)
          this.errorMessage = error
          this.$bvModal.show('error')
        }

        return false;
      },
      async openRegister() {
        this.state = 'register'
      },
      async openLogin() {
        this.state = 'login'
      },
      async openIndex() {
        this.state = 'index'
        const el = document.body
        el.className = ''
      },
    },
    // html header section
  }
</script>

<style>
</style>
