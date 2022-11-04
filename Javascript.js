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
                const wheels3 = document.getElementsByClassName('lefttyre');
                console.log(sky1.style.animationPlayState);
                sky1.style.animationPlayState='paused';
                road2.style.animationPlayState='paused';
                wheels3.style.animationPlayState='paused';
            }
            else
            {
                a.innerHTML="Red Signal";
                a.style.backgroundColor='red';
                let b = document.getElementById('light');
                b.style.display='none';
                let sky1 = document.getElementById('ani');
                let road2 = document.getElementById('road');
                const wheels3 = document.getElementsByClassName('lefttyre');
                console.log(sky1.style.animationPlayState);
                sky1.style.animationPlayState='running';
                road2.style.animationPlayState='running';
                wheels3.style.animationPlayState=='running';
            }
        }