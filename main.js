let poke_ball = 0;
let aleatorio = 0;
let seguro = 0;
let calificacion = 0;
$(document).ready(function(){


     $("#exjquery").hide();
     $("#exbootstrap").hide();
     $("#excss3").hide();
     $("#exvisual").hide();
     $("#exjavascript").hide();
     $("#exhtml5").hide();
     $("#expostgresql").hide();



    $(".yellow").click(function(){

        if(poke_ball == 0 && seguro == 0){
            seguro = 1;
        // $(".nes-pokeball::before").css({"--main-bg-color":"#f00"});
        // $(this).css({"display":"none"});
        $(this).removeClass("yellow");
        $(this).removeClass("nes-pokeball");
        $(this).addClass("nes-pokeball-pre-poke");
        $(this).addClass("red");

        $({ countNum: 0 }).animate({ countNum: 5}, 
            { duration: 5000, // tune the speed here 
                easing: 'linear',
                
                // step: function() { 
                //     // What todo on every count 
                // console.log(this.countNum); },

                 complete: function() { 
                     console.log('finished'); 
                     $("#cortina").addClass("cortina");

                     $({ countNum: 0 }).animate({ countNum: 1}, 
                        { duration: 500, // tune the speed here 
                            easing: 'linear',
                        
                            complete: function() { 
                                console.log('finished-2'); 
                                 $("#contenedor-ball").removeClass("red");
                                 $("#contenedor-ball").addClass("white");
                                $("#contenedor-ball").removeClass("nes-pokeball-pre-poke");
                                $("#contenedor-ball").css({"transform":"scale(0.4)"});
                                aleatorio = (Math.floor(Math.random() * (3 - 0)) + 0);
            
                                // console.log(aleatorio);
                                if(aleatorio == 0){
                                    $("#contenedor-ball").addClass("nes-bulbasaur");
                                }else if(aleatorio == 1){
                                    $("#contenedor-ball").addClass("nes-charmander");
                                }else{
                                    $("#contenedor-ball").addClass("nes-squirtle");
                                }
                                poke_ball = 1;
                        $({ countNum: 0 }).animate({ countNum: 3}, 
                        { duration: 2500, // tune the speed here 
                            easing: 'linear',
                        
                            complete: function() { 
                                console.log('finished-3'); 
                                $("#cortina").removeClass("cortina");

                                $({ countNum: 0 }).animate({ countNum: 1}, 
                                    { duration: 500, // tune the speed here 
                                        easing: 'linear',
                                    
                                        complete: function() { 
                                            seguro = 0;
                                        }
                                        });
                            }
                            });
                            }
                            });
                    } 
                });
            }else
                if(aleatorio == 0 && seguro == 0){
                    seguro = 1;
                    console.log("Estos se ejecuta bulbasur porque?");
                    console.log(aleatorio);
                    $("#contenedor-ball").removeClass("nes-bulbasaur");
                     $("#contenedor-ball").addClass("nes-bulbasaur-guardar");

                     $({ countNum: 0 }).animate({ countNum: 1}, 
                        { duration: 2000, // tune the speed here 
                            easing: 'linear',
                            
                            // step: function() { 
                            //     // What todo on every count 
                            // console.log(this.countNum); },
            
                             complete: function() { 
                                 console.log('finished'); 
                                 $("#cortina").addClass("cortina");

                                 $({ countNum: 0 }).animate({ countNum: 1}, 
                                    { duration: 1000, // tune the speed here 
                                        easing: 'linear',
                                        
                                        // step: function() { 
                                        //     // What todo on every count 
                                        // console.log(this.countNum); },
                        
                                         complete: function() { 
                                             console.log('finished'); 
                                              $("#contenedor-ball").removeClass("nes-bulbasaur-guardar");
                                              $("#contenedor-ball").removeClass("white");
                                              $("#contenedor-ball").addClass("yellow");
                                              $("#contenedor-ball").addClass("nes-pokeball");
                                              $("#contenedor-ball").css({"transform":"scale(0.5)"});

                                              $({ countNum: 0 }).animate({ countNum: 1}, 
                                                { duration: 2000, // tune the speed here 
                                                    easing: 'linear',
                                                    
                                                    // step: function() { 
                                                    //     // What todo on every count 
                                                    // console.log(this.countNum); },
                                    
                                                     complete: function() { 
                                                         console.log('finished'); 
                                                          $("#cortina").removeClass("cortina");
                                                          poke_ball = 0;
                                                          $({ countNum: 0 }).animate({ countNum: 1}, 
                                                            { duration: 500, // tune the speed here 
                                                                easing: 'linear',
                                                            
                                                                complete: function() { 
                                                                    seguro = 0;
                                                                }
                                                                });
                                                     }
                                                    });
                                         }
                                        });
                                
                             }
                            });
                            
                }else if(aleatorio == 1 && seguro == 0){
                    seguro = 1;
                    $("#contenedor-ball").removeClass("nes-charmander");
                     $("#contenedor-ball").addClass("nes-charmander-guardar");

                     $({ countNum: 0 }).animate({ countNum: 1}, 
                        { duration: 2000, // tune the speed here 
                            easing: 'linear',
                            
                            // step: function() { 
                            //     // What todo on every count 
                            // console.log(this.countNum); },
            
                             complete: function() { 
                                 console.log('finished'); 
                                 $("#cortina").addClass("cortina");

                                 $({ countNum: 0 }).animate({ countNum: 1}, 
                                    { duration: 1000, // tune the speed here 
                                        easing: 'linear',
                                        
                                        // step: function() { 
                                        //     // What todo on every count 
                                        // console.log(this.countNum); },
                        
                                         complete: function() { 
                                             console.log('finished'); 
                                              $("#contenedor-ball").removeClass("nes-charmander-guardar");
                                              $("#contenedor-ball").removeClass("white");
                                              $("#contenedor-ball").addClass("yellow");
                                              $("#contenedor-ball").addClass("nes-pokeball");
                                              $("#contenedor-ball").css({"transform":"scale(0.5)"});

                                              $({ countNum: 0 }).animate({ countNum: 1}, 
                                                { duration: 2000, // tune the speed here 
                                                    easing: 'linear',
                                                    
                                                    // step: function() { 
                                                    //     // What todo on every count 
                                                    // console.log(this.countNum); },
                                    
                                                     complete: function() { 
                                                         console.log('finished'); 
                                                          $("#cortina").removeClass("cortina");
                                                          poke_ball = 0;
                                                          $({ countNum: 0 }).animate({ countNum: 1}, 
                                                            { duration: 500, // tune the speed here 
                                                                easing: 'linear',
                                                            
                                                                complete: function() { 
                                                                    seguro = 0;
                                                                }
                                                                });
                                                     }
                                                    });
                                         }
                                        });
                             }
                            });
                }else if(seguro == 0){
                    seguro = 1;
                    $("#contenedor-ball").removeClass("nes-squirtle");
                     $("#contenedor-ball").addClass("nes-squirtle-guardar");

                     $({ countNum: 0 }).animate({ countNum: 1}, 
                        { duration: 2000, // tune the speed here 
                            easing: 'linear',
                            
                            // step: function() { 
                            //     // What todo on every count 
                            // console.log(this.countNum); },
            
                             complete: function() { 
                                 console.log('finished'); 
                                 $("#cortina").addClass("cortina");

                                 $({ countNum: 0 }).animate({ countNum: 1}, 
                                    { duration: 1000, // tune the speed here 
                                        easing: 'linear',
                                        
                                        // step: function() { 
                                        //     // What todo on every count 
                                        // console.log(this.countNum); },
                        
                                         complete: function() { 
                                             console.log('finished'); 
                                              $("#contenedor-ball").removeClass("nes-squirtle-guardar");
                                              $("#contenedor-ball").removeClass("white");
                                              $("#contenedor-ball").addClass("yellow");
                                              $("#contenedor-ball").addClass("nes-pokeball");
                                              $("#contenedor-ball").css({"transform":"scale(0.5)"});

                                              $({ countNum: 0 }).animate({ countNum: 1}, 
                                                { duration: 2000, // tune the speed here 
                                                    easing: 'linear',
                                                    
                                                    // step: function() { 
                                                    //     // What todo on every count 
                                                    // console.log(this.countNum); },
                                    
                                                     complete: function() { 
                                                         console.log('finished'); 
                                                          $("#cortina").removeClass("cortina");
                                                          poke_ball = 0;
                                                          $({ countNum: 0 }).animate({ countNum: 1}, 
                                                            { duration: 500, // tune the speed here 
                                                                easing: 'linear',
                                                            
                                                                complete: function() { 
                                                                    seguro = 0;
                                                                }
                                                                });
                                                     }
                                                    });
                                         }
                                        });
                             }
                            });
                }
                // $("#contenedor-ball").removeClass("nes-bulbasaur");
                // $("#contenedor-ball").removeClass("nes-squirtle");
                // $("#contenedor-ball").removeClass("nes-charmander");
                // $("#contenedor-ball").removeClass("red");
                // $("#contenedor-ball").removeClass("white");
                // $("#contenedor-ball").addClass("yellow");
                // $("#contenedor-ball").addClass("nes-pokeball");
                
            
        
    });

    $("#questionuno .-left .nes-balloon").click(function(){
        $("#questionuno .-right .nes-balloon").slideToggle("fast");
        $("#questionuno .me-res-dos").slideToggle("fast");
    });

    $("#questiondos .-left .nes-balloon").click(function(){
        $("#questiondos .-right .nes-balloon").slideToggle("fast");
        $("#me-res-tres").slideToggle("fast");
    });

    $("#questiontres .-left .nes-balloon").click(function(){
        $("#questiontres .-right .nes-balloon").slideToggle("fast");
        $("#me-res-cuatro").slideToggle("fast");
    });

    $("#questioncuatro .-left .nes-balloon").click(function(){
        $("#questioncuatro .-right .nes-balloon").slideToggle("fast");
        $("#me-res-cinco").slideToggle("fast");
    });

    $("#questioncinco .-left .nes-balloon").click(function(){
        $("#questioncinco .-right .nes-balloon").slideToggle("fast");
        $("#me-res-seis").slideToggle("fast");
    });

    $("#postgresql").click(function(){
        $("#expostgresql").slideDown();
    });

    $("#jquery").click(function(){
        $("#exjquery").slideDown();
      
    });

    $("#exjquery #close").click(function(){
      
        $("#exjquery").slideUp("fast");
    });

    $("#bootstrap").click(function(){
        $("#exbootstrap").slideDown();
      
    });

    $("#exbootstrap #close").click(function(){
      
        $("#exbootstrap").slideUp("fast");
    });

    $("#css3").click(function(){
        $("#excss3").slideDown();
      
    });

    $("#excss3 #close").click(function(){
      
        $("#excss3").slideUp("fast");
    });

    $("#html5").click(function(){
        $("#exhtml5").slideDown();
      
    });

    $("#exhtml5 #close").click(function(){
      
        $("#exhtml5").slideUp("fast");
    });

    $("#visual").click(function(){
        $("#exvisual").slideDown();
      
    });

    $("#exvisual #close").click(function(){
      
        $("#exvisual").slideUp("fast");
    });

    $("#javascript").click(function(){
        $("#exjavascript").slideDown();
      
    });

    $("#exjavascript #close").click(function(){
      
        $("#exjavascript").slideUp("fast");
    });

    $("#postgresql").click(function(){
        $("#expostgresql").slideDown();
      
    });

    $("#expostgresql #close").click(function(){
      
        $("#expostgresql").slideUp("fast");
    });


     $("#chat").click(function(){
      
         $("#exjquery").slideUp();
         $("#expostgresql").slideUp();
        
     });


     $("#all-proyect").click(function(){
        $("#proyect #select-skill #type-badge").removeClass("is-warning");
        $("#proyect #select-skill #type-icon").removeClass("nes-icon star is-small");

        $("#proyect #select-skill #all-proyect #type-badge").addClass("is-warning");
        $("#proyect #select-skill #all-proyect #type-icon").addClass("nes-icon star is-small");
     });

     $("#html-proyect").click(function(){
        $("#proyect #select-skill #type-badge").removeClass("is-warning");
        $("#proyect #select-skill #type-icon").removeClass("nes-icon star is-small");

        
        $("#proyect #select-skill #html-proyect #type-badge").addClass("is-warning");
        $("#proyect #select-skill #html-proyect #type-icon").addClass("nes-icon star is-small");
     });
     $("#css-proyect").click(function(){
        $("#proyect #select-skill #type-badge").removeClass("is-warning");
        $("#proyect #select-skill #type-icon").removeClass("nes-icon star is-small");

        
        $("#proyect #select-skill #css-proyect #type-badge").addClass("is-warning");
        $("#proyect #select-skill #css-proyect #type-icon").addClass("nes-icon star is-small");
     });
     $("#js-proyect").click(function(){
        $("#proyect #select-skill #type-badge").removeClass("is-warning");
        $("#proyect #select-skill #type-icon").removeClass("nes-icon star is-small");

        
        $("#proyect #select-skill #js-proyect #type-badge").addClass("is-warning");
        $("#proyect #select-skill #js-proyect #type-icon").addClass("nes-icon star is-small");
     });
     $("#bootstrap-proyect").click(function(){
        $("#proyect #select-skill #type-badge").removeClass("is-warning");
        $("#proyect #select-skill #type-icon").removeClass("nes-icon star is-small");

        
        $("#proyect #select-skill #bootstrap-proyect #type-badge").addClass("is-warning");
        $("#proyect #select-skill #bootstrap-proyect #type-icon").addClass("nes-icon star is-small");
     });
     $("#jquery-proyect").click(function(){
        $("#proyect #select-skill #type-badge").removeClass("is-warning");
        $("#proyect #select-skill #type-icon").removeClass("nes-icon star is-small");

        
        $("#proyect #select-skill #jquery-proyect #type-badge").addClass("is-warning");
        $("#proyect #select-skill #jquery-proyect #type-icon").addClass("nes-icon star is-small");
     });
     $("#postgresql-proyect").click(function(){
        $("#proyect #select-skill #type-badge").removeClass("is-warning");
        $("#proyect #select-skill #type-icon").removeClass("nes-icon star is-small");

        
        $("#proyect #select-skill #postgresql-proyect #type-badge").addClass("is-warning");
        $("#proyect #select-skill #postgresql-proyect #type-icon").addClass("nes-icon star is-small");
     });

        $("#postgresql-proyect").click(function(){
       
            
            $(".all").hide();
            $(".database").show("medium");

      
    
        });

        $("#all-proyect").click(function(){

            $(".all").show();
            
        });

        $("#html-proyect").click(function(){

            $(".html").show();
            $(".database").hide();
            
        });

        $("#css-proyect").click(function(){

            $(".css").show();

            $(".database").hide();
            
        });

        $("#js-proyect").click(function(){

            $(".all").hide();
            $(".js").show("medium");
            
        });

        $("#jquery-proyect").click(function(){

            $(".all").hide();
            $(".jquery-tag").show("medium");
            
        });

        $("#bootstrap-proyect").click(function(){

            $(".all").hide();
            $(".bootstrap-tag").show("medium");
            
        });
       
    $("#op1").hover(function() {
        if(calificacion === 0){
        $("#heart-1").removeClass("is-transparent");
        $("#heart-1").addClass("is-half");
        }
    }, function() {
        if(calificacion === 0){
        $("#heart-1").removeClass("is-half");
        $("#heart-1").addClass("is-transparent");
        }
        });

    $("#op1").click(function() {
        if(calificacion === 0){
        $("#heart-1").removeClass("is-transparent");
        $("#heart-1").addClass("is-half");
        } else if(calificacion > 1){
            $("#heart-1").removeClass("is-transparent");
            $("#heart-1").removeClass("is-half");
            $("#heart-1").addClass("is-half");
            $("#heart-2").addClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-3").addClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-4").addClass("is-transparent");
            $("#heart-4").removeClass("is-half");
            $("#heart-5").addClass("is-transparent");
            $("#heart-5").removeClass("is-half");
        }

        calificacion = 1;
    });


    $("#op2").hover(function() {
        if(calificacion === 0){
            $("#heart-1").removeClass("is-transparent");
        } else if(calificacion === 1){
            $("#heart-1").removeClass("is-half");
        }
    }, function() {
        if(calificacion === 0){
            $("#heart-1").addClass("is-transparent");
        } else if(calificacion === 1){
            $("#heart-1").addClass("is-half");
        }
        });

    $("#op2").click(function() {
        if(calificacion === 1){
            $("#heart-1").removeClass("is-half");
        } else if(calificacion === 0){
            $("#heart-1").removeClass("is-transparent");
        } else if(calificacion > 1){
            $("#heart-1").removeClass("is-transparent");
            $("#heart-1").removeClass("is-half");
            $("#heart-2").addClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-3").addClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-4").addClass("is-transparent");
            $("#heart-4").removeClass("is-half");
            $("#heart-5").addClass("is-transparent");
            $("#heart-5").removeClass("is-half");
        }
        
        
        calificacion = 2;
    });

    $("#op3").hover(function() {
        if(calificacion === 0 || calificacion === 2){
         $("#heart-1").removeClass("is-transparent");
         $("#heart-2").removeClass("is-transparent");
         $("#heart-2").addClass("is-half");
         } else if(calificacion === 1){
            $("#heart-1").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-2").addClass("is-half");
         } 
    }, function() {
        if(calificacion === 0){
        $("#heart-1").addClass("is-transparent");
        $("#heart-2").removeClass("is-half");
        $("#heart-2").addClass("is-transparent");
        } else if(calificacion === 1){
            $("#heart-1").addClass("is-half");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").addClass("is-transparent");
        }  else if(calificacion === 2){
            $("#heart-2").removeClass("is-half");
            $("#heart-2").addClass("is-transparent");
        }
        });

        $("#op3").click(function() {
            if(calificacion <= 3){
                $("#heart-1").removeClass("is-half");
                $("#heart-1").removeClass("is-transparent");
                $("#heart-2").removeClass("is-transparent");
                $("#heart-2").removeClass("is-half");
                $("#heart-2").addClass("is-half");
            } else{
                $("#heart-2").removeClass("is-transparent");
                $("#heart-2").removeClass("is-half");
                $("#heart-2").addClass("is-half");
                $("#heart-3").addClass("is-transparent");
                $("#heart-3").removeClass("is-half");
                $("#heart-4").addClass("is-transparent");
                $("#heart-4").removeClass("is-half");
                $("#heart-5").addClass("is-transparent");
                $("#heart-5").removeClass("is-half");
            }
            
            
            calificacion = 3;
        });


    $("#op4").hover(function() {
        if(calificacion === 0 || calificacion === 2 || calificacion === 3){
         $("#heart-1").removeClass("is-transparent");
         $("#heart-2").removeClass("is-transparent");
          $("#heart-2").removeClass("is-half");
         }  else if(calificacion === 1){
            $("#heart-1").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
         }
    }, function() {
        if(calificacion === 0){
        $("#heart-1").addClass("is-transparent");
        $("#heart-2").addClass("is-transparent");
        } else if(calificacion === 1){
            $("#heart-1").addClass("is-half");
            $("#heart-2").addClass("is-transparent");
         }  else if(calificacion === 2){
            $("#heart-2").addClass("is-transparent");
         } else if(calificacion === 3){
            $("#heart-2").addClass("is-half");
         }
        });

    $("#op4").click(function() {
            if(calificacion <= 4){
                $("#heart-1").removeClass("is-half");
                $("#heart-1").removeClass("is-transparent");
                $("#heart-2").removeClass("is-transparent");
                $("#heart-2").removeClass("is-half");
            } else{
                $("#heart-2").removeClass("is-transparent");
                $("#heart-2").removeClass("is-half");
                $("#heart-3").addClass("is-transparent");
                $("#heart-3").removeClass("is-half");
                $("#heart-4").addClass("is-transparent");
                $("#heart-4").removeClass("is-half");
                $("#heart-5").addClass("is-transparent");
                $("#heart-5").removeClass("is-half");
            }
            
            
            calificacion = 4;
        });

    $("#op5").hover(function() {
        if(calificacion === 0 || calificacion === 2 || calificacion === 3 || calificacion === 4){
         $("#heart-1").removeClass("is-transparent");
         $("#heart-2").removeClass("is-transparent");
          $("#heart-2").removeClass("is-half");
         $("#heart-3").removeClass("is-transparent");
         $("#heart-3").addClass("is-half");
         } else if(calificacion === 1){
            $("#heart-1").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").addClass("is-half");
         }
    }, function() {
        if(calificacion === 0){
        $("#heart-1").addClass("is-transparent");
        $("#heart-2").addClass("is-transparent");
        $("#heart-3").removeClass("is-half");
        $("#heart-3").addClass("is-transparent");
        } else if(calificacion === 1){
            $("#heart-1").addClass("is-half");
        $("#heart-2").addClass("is-transparent");
        $("#heart-3").removeClass("is-half");
        $("#heart-3").addClass("is-transparent");
         } else if(calificacion === 2){
            $("#heart-2").addClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-3").addClass("is-transparent");
         } else if(calificacion === 3){
            $("#heart-2").addClass("is-half");
            $("#heart-3").removeClass("is-half");
            $("#heart-3").addClass("is-transparent");
         } else if(calificacion === 4){
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-3").addClass("is-transparent");
         }
        });

        $("#op5").click(function() {
            if(calificacion <= 5){
                $("#heart-1").removeClass("is-half");
                $("#heart-1").removeClass("is-transparent");
                $("#heart-2").removeClass("is-transparent");
                $("#heart-2").removeClass("is-half");
                $("#heart-3").removeClass("is-transparent");
                $("#heart-3").removeClass("is-half");
                $("#heart-3").addClass("is-half");
            } else{   
                $("#heart-3").removeClass("is-transparent");
                $("#heart-3").removeClass("is-half");
                $("#heart-3").addClass("is-half");
                $("#heart-4").addClass("is-transparent");
                $("#heart-4").removeClass("is-half");
                $("#heart-5").addClass("is-transparent");
                $("#heart-5").removeClass("is-half");
            }
            
            
            calificacion = 5;
        });

    $("#op6").hover(function() {
        if(calificacion === 0  || calificacion >= 2){
         $("#heart-1").removeClass("is-transparent");
         $("#heart-2").removeClass("is-transparent");
          $("#heart-2").removeClass("is-half");
         $("#heart-3").removeClass("is-transparent");
         $("#heart-3").removeClass("is-half");
         } else if(calificacion === 1){
            $("#heart-1").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
         }
    }, function() {
        if(calificacion === 0){
        $("#heart-1").addClass("is-transparent");
        $("#heart-2").addClass("is-transparent");
        $("#heart-3").addClass("is-transparent");
        } else if(calificacion === 1){
            $("#heart-1").addClass("is-half");
            $("#heart-2").addClass("is-transparent");
            $("#heart-3").addClass("is-transparent");
        } if(calificacion === 2){
            $("#heart-2").addClass("is-transparent");
            $("#heart-3").addClass("is-transparent");
        } else if(calificacion === 3){
            $("#heart-2").addClass("is-half");
            $("#heart-3").addClass("is-transparent");
         } else if(calificacion === 4){
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").addClass("is-transparent");
         } else if(calificacion === 5){
            $("#heart-1").removeClass("is-half");
            $("#heart-1").removeClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-3").addClass("is-half");
         }
        });

        $("#op6").click(function() {
            if(calificacion <= 6){
                $("#heart-1").removeClass("is-half");
                $("#heart-1").removeClass("is-transparent");
                $("#heart-2").removeClass("is-transparent");
                $("#heart-2").removeClass("is-half");
                $("#heart-3").removeClass("is-transparent");
                $("#heart-3").removeClass("is-half");
            } else{   
                $("#heart-3").removeClass("is-transparent");
                $("#heart-3").removeClass("is-half");
                $("#heart-4").addClass("is-transparent");
                $("#heart-4").removeClass("is-half");
                $("#heart-5").addClass("is-transparent");
                $("#heart-5").removeClass("is-half");
            }
            
            
            calificacion = 6;
        });

    $("#op7").hover(function() {
        if(calificacion === 0  || calificacion >= 2 && calificacion < 8){
         $("#heart-1").removeClass("is-transparent");
         $("#heart-2").removeClass("is-transparent");
          $("#heart-2").removeClass("is-half");
         $("#heart-3").removeClass("is-transparent");
         $("#heart-3").removeClass("is-half");
         $("#heart-4").removeClass("is-transparent");
         $("#heart-4").removeClass("is-half");
         $("#heart-4").addClass("is-half");
         } else if(calificacion === 1){
            $("#heart-1").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-4").removeClass("is-transparent");
            $("#heart-4").addClass("is-half");
         }
    }, function() {
        if(calificacion === 0){
        $("#heart-1").addClass("is-transparent");
        $("#heart-2").addClass("is-transparent");
        $("#heart-3").addClass("is-transparent");
        $("#heart-4").removeClass("is-half");
        $("#heart-4").addClass("is-transparent");
        } else if(calificacion === 1){
            $("#heart-1").addClass("is-half");
            $("#heart-2").addClass("is-transparent");
            $("#heart-3").addClass("is-transparent");
            $("#heart-4").removeClass("is-half");
            $("#heart-4").addClass("is-transparent");
        } if(calificacion === 2){
            $("#heart-2").addClass("is-transparent");
            $("#heart-3").addClass("is-transparent");
            $("#heart-4").removeClass("is-half");
            $("#heart-4").addClass("is-transparent");
        } else if(calificacion === 3){
            $("#heart-2").addClass("is-half");
            $("#heart-3").addClass("is-transparent");
            $("#heart-4").removeClass("is-half");
            $("#heart-4").addClass("is-transparent");
         } else if(calificacion === 4){
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").addClass("is-transparent");
            $("#heart-4").removeClass("is-half");
            $("#heart-4").addClass("is-transparent");
         } else if(calificacion === 5){
            $("#heart-1").removeClass("is-half");
            $("#heart-1").removeClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-3").addClass("is-half");
            $("#heart-4").removeClass("is-half");
            $("#heart-4").addClass("is-transparent");
         } else if(calificacion === 6){
            $("#heart-1").removeClass("is-half");
            $("#heart-1").removeClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-4").removeClass("is-half");
            $("#heart-4").addClass("is-transparent");
         }
        });

        $("#op7").click(function() {
            if(calificacion <= 7){
                $("#heart-1").removeClass("is-half");
                $("#heart-1").removeClass("is-transparent");
                $("#heart-2").removeClass("is-transparent");
                $("#heart-2").removeClass("is-half");
                $("#heart-3").removeClass("is-transparent");
                $("#heart-3").removeClass("is-half");
                $("#heart-4").removeClass("is-transparent");
                $("#heart-4").removeClass("is-half");
                $("#heart-4").addClass("is-half");
            } else{   
                $("#heart-4").removeClass("is-transparent");
                $("#heart-4").removeClass("is-half");
                $("#heart-4").addClass("is-half");
                $("#heart-5").addClass("is-transparent");
                $("#heart-5").removeClass("is-half");
            }
            
            
            calificacion = 7;
        });

    $("#op8").hover(function() {
        if(calificacion === 0  || calificacion >= 2){
         $("#heart-1").removeClass("is-transparent");
         $("#heart-2").removeClass("is-transparent");
          $("#heart-2").removeClass("is-half");
          $("#heart-3").removeClass("is-transparent");
          $("#heart-3").removeClass("is-half");
          $("#heart-4").removeClass("is-transparent");
          $("#heart-4").removeClass("is-half");
         } else if(calificacion === 1){
            $("#heart-1").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-4").removeClass("is-transparent");
         }
    }, function() {
        if(calificacion === 0){
        $("#heart-1").addClass("is-transparent");
        $("#heart-2").addClass("is-transparent");
        $("#heart-3").addClass("is-transparent");
        $("#heart-4").addClass("is-transparent");
        } else if(calificacion === 1){
            $("#heart-1").addClass("is-half");
            $("#heart-2").addClass("is-transparent");
            $("#heart-3").addClass("is-transparent");
            $("#heart-4").addClass("is-transparent");
        } else if(calificacion === 2){
            $("#heart-2").addClass("is-transparent");
            $("#heart-3").addClass("is-transparent");
            $("#heart-4").addClass("is-transparent");
        } else if(calificacion === 3){
            $("#heart-2").addClass("is-half");
            $("#heart-3").addClass("is-transparent");
            $("#heart-4").addClass("is-transparent");
         } else if(calificacion === 4){
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").addClass("is-transparent");
            $("#heart-4").addClass("is-transparent");
         } else if(calificacion === 5){
            $("#heart-1").removeClass("is-half");
            $("#heart-1").removeClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-3").addClass("is-half");
            $("#heart-4").removeClass("is-half");
            $("#heart-4").addClass("is-transparent");
         } else if(calificacion === 6){
            $("#heart-1").removeClass("is-half");
            $("#heart-1").removeClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-4").removeClass("is-half");
            $("#heart-4").addClass("is-transparent");
         } else if(calificacion === 7){
            $("#heart-1").removeClass("is-half");
            $("#heart-1").removeClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-4").removeClass("is-half");
            $("#heart-4").removeClass("is-transparent");
            $("#heart-4").addClass("is-half");
         }
        });

        $("#op8").click(function() {
            if(calificacion <= 8){
                $("#heart-1").removeClass("is-half");
                $("#heart-1").removeClass("is-transparent");
                $("#heart-2").removeClass("is-transparent");
                $("#heart-2").removeClass("is-half");
                $("#heart-3").removeClass("is-transparent");
                $("#heart-3").removeClass("is-half");
                $("#heart-4").removeClass("is-transparent");
                $("#heart-4").removeClass("is-half");
            } else{   
                $("#heart-4").removeClass("is-transparent");
                $("#heart-4").removeClass("is-half");
                $("#heart-5").addClass("is-transparent");
                $("#heart-5").removeClass("is-half");
            }
            
            
            calificacion = 8;
        });

    $("#op9").hover(function() {
        if(calificacion === 0  || calificacion >= 2  && calificacion != 10) {
         $("#heart-1").removeClass("is-transparent");
         $("#heart-2").removeClass("is-transparent");
          $("#heart-2").removeClass("is-half");
          $("#heart-3").removeClass("is-transparent");
         $("#heart-3").removeClass("is-half");
         $("#heart-4").removeClass("is-transparent");
         $("#heart-4").removeClass("is-half");
         $("#heart-5").removeClass("is-transparent");
         $("#heart-5").addClass("is-half");
         } else if(calificacion === 1){
            $("#heart-1").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-4").removeClass("is-transparent");
            $("#heart-5").removeClass("is-transparent");
            $("#heart-5").addClass("is-half");
         }
    }, function() {
        if(calificacion === 0){
        $("#heart-1").addClass("is-transparent");
        $("#heart-2").addClass("is-transparent");
        $("#heart-3").addClass("is-transparent");
        $("#heart-4").addClass("is-transparent");
        $("#heart-5").removeClass("is-half");
        $("#heart-5").addClass("is-transparent");
        } else if(calificacion === 1){
            $("#heart-1").addClass("is-half");
            $("#heart-2").addClass("is-transparent");
            $("#heart-3").addClass("is-transparent");
            $("#heart-4").addClass("is-transparent");
            $("#heart-5").removeClass("is-half");
            $("#heart-5").addClass("is-transparent");
        }  else if(calificacion === 2){
            $("#heart-2").addClass("is-transparent");
            $("#heart-3").addClass("is-transparent");
            $("#heart-4").addClass("is-transparent");
            $("#heart-5").removeClass("is-half");
            $("#heart-5").addClass("is-transparent");
        } else if(calificacion === 3){
            $("#heart-2").addClass("is-half");
            $("#heart-3").addClass("is-transparent");
            $("#heart-4").addClass("is-transparent");
            $("#heart-5").removeClass("is-half");
            $("#heart-5").addClass("is-transparent");
         } else if(calificacion === 4){
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-4").addClass("is-transparent");
            $("#heart-5").removeClass("is-half");
            $("#heart-5").addClass("is-transparent");
         } else if(calificacion === 5){
            $("#heart-1").removeClass("is-half");
            $("#heart-1").removeClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-3").addClass("is-half");
            $("#heart-4").addClass("is-transparent");
            $("#heart-5").removeClass("is-half");
            $("#heart-5").addClass("is-transparent");
         } else if(calificacion === 6){
            $("#heart-1").removeClass("is-half");
            $("#heart-1").removeClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-4").addClass("is-transparent");
            $("#heart-5").removeClass("is-half");
            $("#heart-5").addClass("is-transparent");
         } else if(calificacion === 7){
            $("#heart-1").removeClass("is-half");
            $("#heart-1").removeClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-4").removeClass("is-half");
            $("#heart-4").removeClass("is-transparent");
            $("#heart-4").addClass("is-half");
            $("#heart-5").removeClass("is-half");
            $("#heart-5").addClass("is-transparent");
         } else if(calificacion === 8){
            $("#heart-1").removeClass("is-half");
            $("#heart-1").removeClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-4").removeClass("is-half");
            $("#heart-4").removeClass("is-transparent");
            $("#heart-5").removeClass("is-half");
            $("#heart-5").addClass("is-transparent");
         }
        });

        $("#op9").click(function() {
            if(calificacion <= 9){
                $("#heart-1").removeClass("is-half");
                $("#heart-1").removeClass("is-transparent");
                $("#heart-2").removeClass("is-transparent");
                $("#heart-2").removeClass("is-half");
                $("#heart-3").removeClass("is-transparent");
                $("#heart-3").removeClass("is-half");
                $("#heart-4").removeClass("is-transparent");
                $("#heart-4").removeClass("is-half");
                $("#heart-5").removeClass("is-transparent");
                $("#heart-5").removeClass("is-half");
                $("#heart-5").addClass("is-half");
            } else{   
                $("#heart-5").removeClass("is-transparent");
                $("#heart-5").removeClass("is-half");
                $("#heart-5").addClass("is-half");
            }
            
            
            calificacion = 9;
        });

    $("#op10").hover(function() {
        if(calificacion === 0  || calificacion >= 2){
         $("#heart-1").removeClass("is-transparent");
         $("#heart-2").removeClass("is-transparent");
          $("#heart-2").removeClass("is-half");
          $("#heart-3").removeClass("is-transparent");
          $("#heart-3").removeClass("is-half");
          $("#heart-4").removeClass("is-transparent");
          $("#heart-4").removeClass("is-half");
         $("#heart-5").removeClass("is-transparent");
         $("#heart-5").removeClass("is-half");
         } else if(calificacion === 1){
            $("#heart-1").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-4").removeClass("is-transparent");
            $("#heart-5").removeClass("is-transparent");
         }
    }, function() {
        if(calificacion === 0){
        $("#heart-1").addClass("is-transparent");
        $("#heart-2").addClass("is-transparent");
        $("#heart-3").addClass("is-transparent");
        $("#heart-4").addClass("is-transparent");
        $("#heart-5").addClass("is-transparent");
        } else if(calificacion === 1){
            $("#heart-1").addClass("is-half");
            $("#heart-2").addClass("is-transparent");
            $("#heart-3").addClass("is-transparent");
            $("#heart-4").addClass("is-transparent");
            $("#heart-5").addClass("is-transparent");
        } else if(calificacion === 2){
            $("#heart-2").addClass("is-transparent");
            $("#heart-3").addClass("is-transparent");
            $("#heart-4").addClass("is-transparent");
            $("#heart-5").addClass("is-transparent");
        } else if(calificacion === 3){
            $("#heart-2").addClass("is-half");
            $("#heart-3").addClass("is-transparent");
            $("#heart-4").addClass("is-transparent");
            $("#heart-5").addClass("is-transparent");
         } else if(calificacion === 4){
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").addClass("is-transparent");
            $("#heart-4").addClass("is-transparent");
            $("#heart-5").addClass("is-transparent");
         } else if(calificacion === 5){
            $("#heart-1").removeClass("is-half");
            $("#heart-1").removeClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-3").addClass("is-half");
            $("#heart-4").addClass("is-transparent");
            $("#heart-5").addClass("is-transparent");
         } else if(calificacion === 6){
            $("#heart-1").removeClass("is-half");
            $("#heart-1").removeClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-4").addClass("is-transparent");
            $("#heart-5").addClass("is-transparent");
         } else if(calificacion === 7){
            $("#heart-1").removeClass("is-half");
            $("#heart-1").removeClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-4").removeClass("is-half");
            $("#heart-4").removeClass("is-transparent");
            $("#heart-4").addClass("is-half");
            $("#heart-5").addClass("is-transparent");
         } else if(calificacion === 8){
            $("#heart-1").removeClass("is-half");
            $("#heart-1").removeClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-4").removeClass("is-half");
            $("#heart-4").removeClass("is-transparent");
            $("#heart-5").addClass("is-transparent");
         } else if(calificacion === 9){
            $("#heart-1").removeClass("is-half");
            $("#heart-1").removeClass("is-transparent");
            $("#heart-2").removeClass("is-half");
            $("#heart-2").removeClass("is-transparent");
            $("#heart-3").removeClass("is-transparent");
            $("#heart-3").removeClass("is-half");
            $("#heart-4").removeClass("is-half");
            $("#heart-4").removeClass("is-transparent");
            $("#heart-5").removeClass("is-transparent");
            $("#heart-5").removeClass("is-half");
            $("#heart-5").addClass("is-half");
         }
        });

        $("#op10").click(function() {
            if(calificacion <= 10){
                $("#heart-1").removeClass("is-half");
                $("#heart-1").removeClass("is-transparent");
                $("#heart-2").removeClass("is-transparent");
                $("#heart-2").removeClass("is-half");
                $("#heart-3").removeClass("is-transparent");
                $("#heart-3").removeClass("is-half");
                $("#heart-4").removeClass("is-transparent");
                $("#heart-4").removeClass("is-half");
                $("#heart-5").removeClass("is-transparent");
                $("#heart-5").removeClass("is-half");
            }
            
            calificacion = 10;
        });

        $("#gmail-2").click(function(){
            $("#correo-sam").toggleClass("mostrar-correo");
        });


        $("#jquery").click(function(){
            if(($(window).width()) <= 770){
                
                $("#exjquery img").attr("src","./skills/5cc1c3bd51697431e1e115c7c9f919f9.webp");
            }
        });

            $(window).resize(function(){
        
        if(($(window).width()) <= 770){
            
            $("#exjquery img").attr("src","./skills/5cc1c3bd51697431e1e115c7c9f919f9.webp");

        }else{
            $("#exjquery img").attr("src","./skills/Jquery.jpg");

        } 
         
    });

    $("#html5").click(function(){
        if(($(window).width()) <= 770){
            
            $("#exhtml5 img").attr("src","./skills/png-transparent-html-web-browser-attribute-visual-basic-microsoft-visual-studio-angry-beavers-logo-fictional-cha.png");
        }
    });

        $(window).resize(function(){
    
    if(($(window).width()) <= 770){
        
        $("#exhtml5 img").attr("src","./skills/png-transparent-html-web-browser-attribute-visual-basic-microsoft-visual-studio-angry-beavers-logo-fictional-cha.png");

    }else{
        $("#exhtml5 img").attr("src","./skills/html5-mobile-apps.png");

    }

    });

    $("#postgresql").click(function(){
        if(($(window).width()) <= 770){
            
            $("#expostgresql img").attr("src","./skills/head-ele.jpg");
        }
    });

        $(window).resize(function(){
    
    if(($(window).width()) <= 770){
        
        $("#expostgresql img").attr("src","./skills/head-ele.jpg");

    }else{
        $("#expostgresql img").attr("src","./skills/head-trunk-elephant-abstract-wallpaper-preview.jpg");

    }

    });

    $("#css3").click(function(){
        if(($(window).width()) <= 770){
            
            $("#excss3 img").attr("src","./skills/css3.jpg");
        }
    });

        $(window).resize(function(){
    
    if(($(window).width()) <= 770){
        
        $("#excss3 img").attr("src","./skills/css3.jpg");

    }else{
        $("#excss3 img").attr("src","./skills/css3-830x467.jpg");

    }

    });

    $("#visual").click(function(){
        if(($(window).width()) <= 770){
            
            $("#exvisual img").attr("src","./skills/visual-studio-h.png");
        }
    });

        $(window).resize(function(){
    
    if(($(window).width()) <= 770){
        
        $("#exvisual img").attr("src","./skills/visual-studio-h.png");

    }else{
        $("#exvisual img").attr("src","./skills/kisspng-microsoft-visual-studio-visual-studio-code-compute-studio-logo-5adfa1bba7a121.8047336115246053716866.jpg");

    }

    });

    $("#bootstrap").click(function(){
        if(($(window).width()) <= 770){
            
            $("#exbootstrap img").attr("src","./skills/v5.jpg");
        }
    });

        $(window).resize(function(){
    
    if(($(window).width()) <= 770){
        
        $("#exbootstrap img").attr("src","./skills/v5.jpg");

    }else{
        $("#exbootstrap img").attr("src","./skills/bootstrap-stack.png");

    }

    });

    $("#javascript").click(function(){
        if(($(window).width()) <= 770){
            
            $("#exjavascript img").attr("src","./skills/Javascript-by-SoyHorizonte.jpg");
        }
    });

        $(window).resize(function(){
    
    if(($(window).width()) <= 770){
        
        $("#exjavascript img").attr("src","./skills/Javascript-by-SoyHorizonte.jpg");

    }else{
        $("#exjavascript img").attr("src","./skills/Javascript.jpg");

    }

    });

    $("#bars").click(function(){
        $(".show-font").slideToggle();
    });


    $("form button").click(function(){
       
        if($("#name").val() != ""){
            
            if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test($("#email").val())){
                if($("#role").val() != null){
                    if($("#comments").val() != ""){
                        if(calificacion > 0){
                            var templateParams = {
                                from_name: $("#name").val(),
                                to_name: "Sarut",
                                message: $("#comments").val(),
                                from_email: $("#email").val(),
                                ocupacion: $("#role").val(),
                                edad: $("#Age").val(),
                                puntuacion: calificacion
                             };
                
                             emailjs.send('gmail','template_ekcxbbn', templateParams)
                            .then(function(response) {
                                console.log('SUCCESS!', response.status, response.text);
                                alert("Gracias por tu mensaje");
                
                                $("#name").val("") ;
                                $("#email").val("") ;
                                $("#role").val(null) ;
                                $("#comments").val("");
                                $("#Age").val("");
                            }, function(error) {
                                console.log('FAILED...', error);
                                alert("Uhh, ocurrió un error, intenta enviar el mensaje mas tarde por favor.");
                            });
                        }else{
                            alert("Califica mi pagina por favor");
                        }
                    }else{
                        alert("Indica un comentario por favor");
                    }
                }else{
                    alert("Introduce un ROL por favor");
                }
            }else{
                alert("Introduzca un correo valido por favor");
            }
        }else{
            alert("Introduzca un nombre por favor");
        }
        // 
        // 
        // 
        //     alert("Felicitaciones, instrodujo bien los datos");
        // }
            

            
       
        
    
           
       
        
       
    });

    

});
