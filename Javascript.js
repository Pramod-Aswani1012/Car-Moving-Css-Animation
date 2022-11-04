let a = document.getElementById('btn');
        function signal()
        {
            if(a.innerHTML=="Red Signal")
            {
                a.innerHTML="Green Signal";
                a.style.backgroundColor='greenyellow';
                let b = document.getElementById('light');
                b.style.display='block';
                let sky1 = document.getElementById('ani');
                let road2 = document.getElementById('road');
                // const wheels3 = document.getElementsByClassName("wheels");
                let rt = document.querySelector('.righttyre')
                let lt = document.querySelector('.lefttyre')
                
                // console.log(sky1.style.animationPlayState);
                sky1.style.animationPlayState='paused';
                road2.style.animationPlayState='paused';
                rt.style.animationPlayState='paused';
                lt.style.animationPlayState='paused';
            }
            else
            {
                a.innerHTML="Red Signal";
                a.style.backgroundColor='red';
                let b = document.getElementById('light');
                b.style.display='none';
                let sky1 = document.getElementById('ani');
                let road2 = document.getElementById('road');
                let rt = document.querySelector('.righttyre');
                let lt = document.querySelector('.lefttyre')
                // console.log(sky1.style.animationPlayState);
                sky1.style.animationPlayState='running';
                road2.style.animationPlayState='running';
                rt.style.animationPlayState='running';
                lt.style.animationPlayState='running';
            }
        }
