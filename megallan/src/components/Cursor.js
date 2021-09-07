import React, {useEffect, useState} from 'react';

import {TweenMax} from 'gsap';


function Cursor() {

    const [active, setActive] = useState('')


    useEffect(() => {

        var cursor = document.querySelector(".cursor"),
        follower = document.querySelector(".cursor-follower");

        var posX = 0,
            posY = 0,
            mouseX = 0,
            mouseY = 0;

        TweenMax.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                left: posX - 25,
                top: posY - 25
                }
            });

            TweenMax.set(cursor, {
                css: {
                left: mouseX - 5,
                top: mouseY - 5
                }
            });
            }
        });

        const link = document.querySelectorAll('.hover-this');

        const animateit = function (e) {
            const span = this.querySelector('span');
            const {
            offsetX: x,
            offsetY: y
            } = e, {
            offsetWidth: width,
            offsetHeight: height
            } = this,

            move = 25,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

            span.style.transform = `translate(${xMove}px, ${yMove}px)`;

            if (e.type === 'mouseleave') span.style.transform = '';
        };

        document.addEventListener('mousemove', function (e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        });

        link.forEach(b => b.addEventListener('mousemove', animateit));
        link.forEach(b => b.addEventListener('mouseleave', animateit));



        let portfolio_item = document.querySelectorAll(".portfolio-item")

        Array.from(portfolio_item).forEach(link => {
            link.addEventListener('mouseenter', function(event) {
                setActive('active')
            });
            link.addEventListener('mouseleave', function(event) {
                setActive()
            });
        });



        let cursor_item = document.querySelectorAll(".cursor-item")

        Array.from(cursor_item).forEach(link => {
            link.addEventListener('mouseenter', function(event) {
                setActive('active')
            });
            link.addEventListener('mouseleave', function(event) {
                setActive()
            });
        });

    }, []);


    return (
        <div>
            <div className={`cursor ${active}`}></div>
            <div className={`cursor-follower ${active}`}></div>
        </div>
    )
}

export default Cursor;
