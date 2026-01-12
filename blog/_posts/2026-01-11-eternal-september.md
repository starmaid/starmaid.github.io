---
layout: post
title: Eternal September
tags: tool, internet history
image:
  path: /blog/img/2026-01-11-eternal-september/prion_thumb.png
---

<style>
    .calcbox {
        padding: 5px;
        color: black;
        background: white;
        align-items: center;
        display: flex;
        flex-direction: column;
        width: min-content;
    }

    .calcbox2 {
        flex: auto;
        padding: 5px;
        border: 1px solid black;
        gap: 16px;
        flex-direction: column;
    }

    .fieldbox {
        padding: 5px;
        width: 170px;
        flex: 1 1 auto;
        display: flex;
        height: min-content;
    }

    .buttonbox {
        padding: 5px;
        width: 160px;
        flex: 1 1 auto;
        display: flex;
        flex-flow: row;
    }

    .calccontainer {
        margin: 3%;
        min-width: 270px;
        font-family: serif;
        align-items: center;
    }

    .calccontainer2 {
        width: 100%;
        align-items: center;
        display: flex;
        flex-direction: column;
    }
</style>

<div class=calccontainer>
    <div class=calccontainer2>
        <div class=calcbox>
            <div class=calcbox2>
                <div class="fieldbox">
                    1993-09-<input id="sdatedays" type="text" maxlength="8" size="8" />
                </div>
                <div class="buttonbox">
                    <button type="button" id="sdate2date">Convert to normie time</button>
                </div>
                <div id="sdateMsgBox"></div>
            </div>
        </div>
        <div class=calcbox>
            <div class=calcbox2>
                <div class="fieldbox">
                    <input id="dateyear" type="text" maxlength="4" size="4" value="2026" />
                    -<input id="datemonth" type="text" maxlength="2" size="2" value="01" />
                    -<input id="dateday" type="text" maxlength="2" size="2" value="12" />
                </div>
                <div class="buttonbox">
                    <button type="button" id="date2sdate">Convert to eternal september time</button>
                </div>
                <div id="dateMsgBox"></div>
            </div>
        </div>
    </div>
</div>

<script type="module" src="/blog/img/2026-01-11-eternal-september/datetest.js"></script>



If you don't want to google "how many days since august 30 1993". [If you don't know what I'm talking about.](https://en.wikipedia.org/wiki/Eternal_September)


![](/blog/img/2026-01-11-eternal-september/example.jpg)

