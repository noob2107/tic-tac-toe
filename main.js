let c=0;

        // document.getElementById('x').addEventListener("click",start,  false);
        // document.getElementById("o").addEventListener("click", start, false); 
        
        document.getElementById('0').addEventListener("click", fill0, true);
        document.getElementById("1").addEventListener("click", fill1, true); 
        document.getElementById("2").addEventListener("click", fill2, true); 
        document.getElementById("3").addEventListener("click", fill3, true); 
        document.getElementById("4").addEventListener("click", fill4, true); 
        document.getElementById("5").addEventListener("click", fill5, true); 
        document.getElementById("6").addEventListener("click", fill6, true); 
        document.getElementById("7").addEventListener("click", fill7, true); 
        document.getElementById("8").addEventListener("click", fill8, true);

        // function start()
        // {
        //     // console.log("dfj",f,s);
        //     document.getElementById('front').style.display = "none";
        //     document.getElementById('main').style.display = "block";
        //     // document.getElementById('last').style.fontFamily = "'Righteous', cursive";
        //     // document.getElementById('restart').style.fontFamily = "'Righteous', cursive";
        // }


        document.getElementById('0').addEventListener("click",check);
        document.getElementById('1').addEventListener("click",check);
        document.getElementById('2').addEventListener("click",check);
        document.getElementById('3').addEventListener("click",check);
        document.getElementById('4').addEventListener("click",check);
        document.getElementById('5').addEventListener("click",check);
        document.getElementById('6').addEventListener("click",check);
        document.getElementById('7').addEventListener("click",check);
        document.getElementById('8').addEventListener("click",check);



        function fill0(){
            // check();
            if(c%2==0)
                {
                    document.getElementById("0").innerHTML ="X";
                    document.getElementById("0").style.color="black"

                }
            else
                {
                    document.getElementById("0").innerHTML ="O";
                    document.getElementById("0").style.color="black"
                }
            c=c+1;
            console.log(c)
            check(document.getElementById('0').id);
        }

        function fill1(){
            // check();
            if(c%2==0)
                {
                    document.getElementById("1").innerHTML ="X";
                    document.getElementById("1").style.color="black"

                }
            else
                {
                    document.getElementById("1").innerHTML ="O";
                    document.getElementById("1").style.color="black"
                }
            c=c+1;
            console.log(c)
            check(document.getElementById('1').id);
        }

        function fill2(){
            // check();
            if(c%2==0)
                {
                    document.getElementById("2").innerHTML ="X";
                    document.getElementById("2").style.color="black"

                }
            else
                {
                    document.getElementById("2").innerHTML ="O";
                    document.getElementById("2").style.color="black"
                }
            c=c+1;
            console.log(c)
            check(document.getElementById('2').id);
        }

        function fill3(){
            // check();
            if(c%2==0)
                {
                    document.getElementById("3").innerHTML ="X";
                    document.getElementById("3").style.color="black"

                }
            else
                {
                    document.getElementById("3").innerHTML ="O";
                    document.getElementById("3").style.color="black"
                }
            c=c+1;
            console.log(c)
            check(document.getElementById('3').id);
        }

        function fill4(){
            // check();
            if(c%2==0)
                {
                    document.getElementById("4").innerHTML ="X";
                    document.getElementById("4").style.color="black"

                }
            else
                {
                    document.getElementById("4").innerHTML ="O";
                    document.getElementById("4").style.color="black"
                }
            c=c+1;
            console.log(c)
            check(document.getElementById('4').id);
        }

        function fill5(){
            // check();
            if(c%2==0)
                {
                    document.getElementById("5").innerHTML ="X";
                    document.getElementById("5").style.color="black"

                }
            else
                {
                    document.getElementById("5").innerHTML ="O";
                    document.getElementById("5").style.color="black"
                }
            c=c+1;
            console.log(c)
            check(document.getElementById('5').id);
        }

        function fill6(){
            // check();
            if(c%2==0)
                {
                    document.getElementById("6").innerHTML ="X";
                    document.getElementById("6").style.color="black"

                }
            else
                {
                    document.getElementById("6").innerHTML ="O";
                    document.getElementById("6").style.color="black"
                }
            c=c+1;
            console.log(c)
            check(document.getElementById('6').id);
        }

        function fill7(){
            // check();
            if(c%2==0)
                {
                    document.getElementById("7").innerHTML ="X";
                    document.getElementById("7").style.color="black"

                }
            else
                {
                    document.getElementById("7").innerHTML ="O";
                    document.getElementById("7").style.color="black"
                }
            c=c+1;
            console.log(c)
            check(document.getElementById('7').id);
        }

        function fill8(){
            // check();
            if(c%2==0)
                {
                    document.getElementById("8").innerHTML ="X";
                    document.getElementById("8").style.color="black"

                }
            else
                {
                    document.getElementById("8").innerHTML ="O";
                    document.getElementById("8").style.color="black"
                }
            c=c+1;
            console.log(c)
            check(document.getElementById('8').id);
        }
        

        function check(x)
        {

            if(x==0)
            document.getElementById("0").removeEventListener("click", fill0,true);
            else if(x==1)
            document.getElementById("1").removeEventListener("click", fill1 , true);

            else if(x==2) 
            document.getElementById("2").removeEventListener("click", fill2 , true);

            else if(x==3) 
            document.getElementById("3").removeEventListener("click", fill3 , true);

            else if(x==4) 
            document.getElementById("4").removeEventListener("click", fill4 , true);

            else if(x==5) 
            document.getElementById("5").removeEventListener("click", fill5 , true);

            else if(x==6) 
            document.getElementById("6").removeEventListener("click", fill6 , true);

            else if(x==7) 
            document.getElementById("7").removeEventListener("click", fill7 , true);

            else if(x==8) 
            document.getElementById("8").removeEventListener("click", fill8 , true); 




            let y = document.getElementsByTagName('span');
            console.log(y)
                let x0=y[0].innerHTML;
                let x1=y[1].innerHTML;
                let x2=y[2].innerHTML;
                let x3=y[3].innerHTML;
                let x4=y[4].innerHTML;
                let x5=y[5].innerHTML;
                let x6=y[6].innerHTML;
                let x7=y[7].innerHTML;
                let x8=y[8].innerHTML;

                        if( (x0=="X"&&x1=="X"&&x2=="X") ||  (x3=="X"&&x4=="X"&&x5=="X") ||  (x6=="X"&&x7=="X"&&x8=="X") ||  (x0=="X"&&x4=="X"&&x8=="X") ||  (x2=="X"&&x4=="X"&&x6=="X") ||  (x0=="X"&&x3=="X"&&x6=="X") ||  (x1=="X"&&x4=="X"&&x7=="X") ||  (x5=="X"&&x8=="X"&&x2=="X")   )
                        {
                            document.getElementById('main').style.display = "none";
                            document.getElementById('last').style.display = "block";
                            document.getElementById('last').style.fontFamily = "'Righteous', cursive";
                            document.getElementById('restart').style.fontFamily = "'Righteous', cursive";
                            let t=document.getElementById('txt');
                            t.innerHTML="X won"
                        }
                        else if( (x0=="O"&&x1=="O"&&x2=="O") ||  (x3=="O"&&x4=="O"&&x5=="O") ||  (x6=="O"&&x7=="O"&&x8=="O") ||  (x0=="O"&&x4=="O"&&x8=="O") ||  (x2=="O"&&x4=="O"&&x6=="O") ||  (x0=="O"&&x3=="O"&&x6=="O") ||  (x1=="O"&&x4=="O"&&x7=="O") ||  (x5=="O"&&x8=="O"&&x2=="O")   )
                        {
                            document.getElementById('main').style.display = "none";
                            document.getElementById('last').style.display = "block";
                            document.getElementById('last').style.fontFamily = "'Righteous', cursive";
                            document.getElementById('restart').style.fontFamily = "'Righteous', cursive";
                            let t=document.getElementById('txt');
                            t.innerHTML="O won"
                        }
                        else if(c==9)
                        {
                            document.getElementById('main').style.display = "none";
                            document.getElementById('last').style.display = "block";
                            document.getElementById('last').style.fontFamily = "'Righteous', cursive";
                            document.getElementById('restart').style.fontFamily = "'Righteous', cursive";
                            let t=document.getElementById('txt');
                            t.innerHTML="Draw"
                        }
                }
        
        
