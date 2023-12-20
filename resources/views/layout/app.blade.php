<!DOCTYPE html>
<html lang="en">

@include('components.head')

<body class="animsition">
    <div class="page-wrapper">
        <!-- HEADER DESKTOP-->
        @include('components.header')
        <!-- END HEADER DESKTOP -->

        <!-- WELCOME-->
        <!-- END WELCOME-->

        <!-- PAGE CONTENT-->
        <div class="page-container3">
            <section class="alert-wrap p-t-70 p-b-70">
                <div class="container">
                    <!-- ALERT-->
                    <!-- <div class="alert au-alert-success alert-dismissible fade show au-alert au-alert--70per" role="alert">
                        <i class="zmdi zmdi-check-circle"></i>
                        <span class="content">You successfully read this important alert message.</span>
                        <button class="close" type="button" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">
                                <i class="zmdi zmdi-close-circle"></i>
                            </span>
                        </button>
                    </div> -->
                    <!-- END ALERT-->
                </div>
            </section>
            <section>
                <!-- PAGE CONTENT-->
                @yield('content')
                <!-- END PAGE CONTENT-->
            </section>
        </div>
        <!-- END PAGE CONTENT  -->

    </div>
    @include('components.foot')

</body>

</html>
<!-- end document-->