<template>
  <div id="app">
    <body>

    <div>
        <header class="header">
    	<div class="wrapper">
    		<div id="top" class="top">
    			<a href="https://www.haarlem.nl/uittreksel-persoonsgegevens/#" class="button-basic" id="button-menu">
    				<span aria-hidden="true" data-icon="b"></span>
    				Menu
    			</a>

    			<h1 class="logo">
    				<a title="Gemeente Haarlem" href="https://www.haarlem.nl/inwoners-en-ondernemers/"> Gemeente <span>Haarlem</span></a>
    			</h1>

    			<ul class="skip-links">
    				<li><a href="https://www.haarlem.nl/inwoners-en-ondernemers/#content">Naar de inhoud</a></li>
    				<li><a href="https://www.haarlem.nl/inwoners-en-ondernemers/#navigation">Naar hoofdnavigatie</a></li>
    			</ul>

    			<a href="https://www.haarlem.nl/uittreksel-persoonsgegevens/#" class="button-basic" id="button-search">
    				<span aria-hidden="true" data-icon="d"></span>
    				Zoek
    			</a>
    		</div>
    		<ul class="top-links"><li class="top-link"><a href="http://www.haarlemmarketing.nl/bezoeken/" title="Toeristische informatie" rel="external">Toeristische informatie<span class="screen-reader-text"> (externe website)</span><span aria-hidden="true" data-icon="q"></span></a></li></ul>
    		<form id="tx-solr-search-form-pi-search" action="https://www.haarlem.nl/zoeken" class="search" method="get" accept-charset="utf-8">
    			<fieldset>
    				<legend class="screen-reader-text">Zoeken</legend>
    				<div>
    					<span aria-hidden="true" data-icon="a"></span>
    					<label for="inputText" class="screen-reader-text">Zoeken</label>
    					<input type="hidden" name="id" value="70">
    					<input type="hidden" name="L" value="0" id="search">
    					<input type="search" id="inputText" class="tx-solr-q" name="q" value="">
    				</div>
    				<input type="submit" value="Zoek" class="button">
    			</fieldset>
    		</form>
    	</div>
    </header>

    <nav id="navigation"><h2 class="visuallyhidden">Navigatie</h2><ul class="wrapper"><li class="tab-citizens is-selected"><a href="https://www.haarlem.nl/inwoners-en-ondernemers/" title="Inwoners en ondernemers">Inwoners en ondernemers</a><ul class="sub"><li class="is-selected"><a href="https://www.haarlem.nl/paspoort-rijbewijs-en-uittreksel/" title="Paspoort, rijbewijs en uittreksel">Paspoort, rijbewijs en uittreksel</a><ul><li><a href="https://www.haarlem.nl/paspoort/" title="Paspoort">Paspoort</a></li><li><a href="https://www.haarlem.nl/rijbewijs/" title="Rijbewijs">Rijbewijs</a></li><li class="is-selected"><a href="https://www.haarlem.nl/uittreksel-persoonsgegevens/" title="Uittreksel persoonsgegevens">Uittreksel persoonsgegevens</a></li><li><a href="https://www.haarlem.nl/nederlandse-identiteitskaart/" title="Nederlandse identiteitskaart">Nederlandse identiteitskaart</a></li><li><a href="https://www.haarlem.nl/akte-burgerlijke-stand/" title="Akte burgerlijke stand">Akte burgerlijke stand</a></li><li><a href="https://www.haarlem.nl/inzage-en-correctie-persoonsgegevens/" title="Inzage en correctie persoonsgegevens">Inzage en correctie persoonsgegevens</a></li><li><a href="https://www.haarlem.nl/paspoort-rijbewijs-en-uittreksel/" title="Meer onderwerpen paspoort, rijbewijs en uitreksel">Meer onderwerpen</a></li></ul></li><li><a href="https://www.haarlem.nl/parkeren-verkeer-en-vervoer/" title="Parkeren, verkeer en vervoer">Parkeren, verkeer en vervoer</a><ul><li><a href="https://www.haarlem.nl/parkeervergunning-particulier/" title="Parkeervergunning particulier">Parkeervergunning particulier</a></li><li><a href="https://www.haarlem.nl/parkeervergunning-bedrijf/" title="Parkeervergunning bedrijf">Parkeervergunning bedrijf</a></li><li><a href="https://www.haarlem.nl/parkeervergunning-bezoekers/" title="Parkeervergunning bezoekers">Parkeervergunning bezoekers</a></li><li><a href="https://www.haarlem.nl/tijdelijke-parkeerontheffing/" title="Tijdelijke parkeerontheffing">Tijdelijke parkeerontheffing</a></li><li><a href="https://www.haarlem.nl/parkeertarieven-op-straat-en-in-garages/" title="Parkeertarieven op straat en in garages">Parkeertarieven op straat en in garages</a></li><li><a href="https://www.haarlem.nl/parkeervergunning-binnenstad/" title="Parkeervergunning binnenstad">Parkeervergunning binnenstad</a></li><li><a href="https://www.haarlem.nl/parkeren-verkeer-en-vervoer/" title="Meer onderwerpen parkeren, verkeer en vervoer">Meer onderwerpen</a></li></ul></li><li><a href="https://www.haarlem.nl/afval-en-milieu/" title="Afval en milieu">Afval en milieu</a><ul><li><a href="https://www.haarlem.nl/afvalinzameling/" title="Afvalinzameling">Afvalinzameling</a></li><li><a href="https://www.haarlem.nl/afval-scheiden/" title="Afval scheiden">Afval scheiden</a></li><li><a href="https://www.haarlem.nl/milieuplein/" title="Milieuplein">Milieuplein</a></li><li><a href="https://www.haarlem.nl/grofvuil/" title="Grofvuil">Grofvuil</a></li><li><a href="https://www.haarlem.nl/bodeminformatie-voor-verkopers-en-kopers/" title="Bodeminformatie voor verkopers en kopers">Bodeminformatie voor verkopers en kopers</a></li><li><a href="https://www.haarlem.nl/afvalpas/" title="Afvalpas">Afvalpas</a></li><li><a href="https://www.haarlem.nl/afval-en-milieu/" title="Meer onderwerpen afval en milieu">Meer onderwerpen</a></li></ul></li><li><a href="https://www.haarlem.nl/geboorte-huwelijk-en-overlijden/" title="Geboorte, huwelijk en overlijden">Geboorte, huwelijk en overlijden</a><ul><li><a href="https://www.haarlem.nl/geboorteaangifte/" title="Geboorteaangifte">Geboorteaangifte</a></li><li><a href="https://www.haarlem.nl/erkenning-en-ouderlijk-gezag/" title="Erkenning en ouderlijk gezag">Erkenning en ouderlijk gezag</a></li><li><a href="https://www.haarlem.nl/trouwen/" title="Trouwen">Trouwen</a></li><li><a href="https://www.haarlem.nl/overlijden-doorgeven/" title="Overlijden doorgeven">Overlijden doorgeven</a></li><li><a href="https://www.haarlem.nl/registratie-buitenlands-huwelijk/" title="Registratie buitenlands huwelijk">Registratie buitenlands huwelijk</a></li><li><a href="https://www.haarlem.nl/geboorte-huwelijk-en-overlijden/" title="Meer onderwerpen geboorte, huwelijk en overlijden">Meer onderwerpen</a></li><li><a href="https://www.haarlem.nl/akte-burgerlijke-stand/" title="Akte burgerlijke stand">Akte burgerlijke stand</a></li></ul></li><li class="last more"><a href="https://www.haarlem.nl/meer-onderwerpen/" title="Meer onderwerpen...">Meer onderwerpen...<span aria-hidden="true" data-icon="d"></span></a><ul><li class="tab-citizens"><a href="https://www.haarlem.nl/wmo-zorg-en-welzijn/" title="Wmo, zorg en welzijn">Wmo, zorg en welzijn</a></li><li class="tab-citydistricts"><a href="https://www.haarlem.nl/bouwen-en-verbouwen/" title="Bouwen en verbouwen">Bouwen en verbouwen</a></li><li class="tab-governance"><a href="https://www.haarlem.nl/contact/" title="Contact">Contact</a></li><li><a href="https://www.haarlem.nl/gemeentelijke-belastingen/" title="Gemeentelijke belastingen">Gemeentelijke belastingen</a></li><li><a href="https://www.haarlem.nl/ondernemen/" title="Ondernemen">Ondernemen</a></li><li class="tab-governance"><a href="https://www.haarlem.nl/subsidies-vergoedingen-en-leningen/" title="Subsidies, vergoedingen en leningen">Subsidies, vergoedingen en leningen</a></li><li><a href="https://www.haarlem.nl/meer-onderwerpen/" title="Meer rubrieken inwoners en ondernemers">Overzichtspagina</a></li></ul></li></ul></li><li class="tab-citydistricts"><a href="https://www.haarlem.nl/stadsdelen/" title="Stadsdelen">Stadsdelen</a><ul class="sub"><li><a href="https://www.haarlem.nl/stadsdeel-centrum/" title="Stadsdeel Centrum">Stadsdeel Centrum</a><ul><li><a href="https://www.haarlem.nl/afvalinzameling/" title="Afvalinzameling">Afvalinzameling</a></li><li class="tab-citydistricts"><a href="https://www.haarlem.nl/wijk-en-buurten-stadsdeel-centrum/" title="Wijk en buurten stadsdeel Centrum">Wijk en buurten stadsdeel Centrum</a></li><li><a href="https://www.haarlem.nl/nieuws-stadsdeel-centrum/" title="Nieuws stadsdeel Centrum">Nieuws stadsdeel Centrum</a></li><li class="tab-governance"><a href="https://www.haarlem.nl/projecten-stadsdeel-centrum/" title="Projecten stadsdeel Centrum">Projecten stadsdeel Centrum</a></li><li><a href="https://www.haarlem.nl/contact-stadsdeel-centrum/" title="Contact stadsdeel Centrum">Contact stadsdeel Centrum</a></li><li><a href="https://www.haarlem.nl/beheer-en-onderhoud-centrum/" title="Beheer en onderhoud Centrum">Beheer en onderhoud Centrum</a></li></ul></li><li><a href="https://www.haarlem.nl/stadsdeel-noord/" title="Stadsdeel Noord">Stadsdeel Noord</a><ul><li><a href="https://www.haarlem.nl/afvalinzameling/" title="Afvalinzameling">Afvalinzameling</a></li><li class="tab-citydistricts"><a href="https://www.haarlem.nl/wijken-en-buurten-stadsdeel-noord/" title="Wijken en buurten stadsdeel Noord">Wijken en buurten stadsdeel Noord</a></li><li><a href="https://www.haarlem.nl/nieuws-stadsdeel-noord/" title="Nieuws stadsdeel Noord">Nieuws stadsdeel Noord</a></li><li class="tab-governance"><a href="https://www.haarlem.nl/projecten-stadsdeel-noord/" title="Projecten stadsdeel Noord">Projecten stadsdeel Noord</a></li><li><a href="https://www.haarlem.nl/contact-stadsdeel-noord/" title="Contact stadsdeel Noord">Contact stadsdeel Noord</a></li><li><a href="https://www.haarlem.nl/beheer-en-onderhoud-noord/" title="Beheer en onderhoud Noord">Beheer en onderhoud Noord</a></li><li><a href="https://www.haarlem.nl/wijkcontract-indischebuurt-noord/" title="Wijkcontract Indischebuurt Noord">Wijkcontract Indischebuurt Noord</a></li></ul></li><li><a href="https://www.haarlem.nl/stadsdeel-oost/" title="Stadsdeel Oost">Stadsdeel Oost</a><ul><li><a href="https://www.haarlem.nl/afvalinzameling/" title="Afvalinzameling">Afvalinzameling</a></li><li class="tab-citydistricts"><a href="https://www.haarlem.nl/wijken-en-buurten-stadsdeel-oost/" title="Wijken en buurten stadsdeel Oost">Wijken en buurten stadsdeel Oost</a></li><li><a href="https://www.haarlem.nl/nieuws-stadsdeel-oost/" title="Nieuws stadsdeel Oost">Nieuws stadsdeel Oost</a></li><li class="tab-governance"><a href="https://www.haarlem.nl/projecten-stadsdeel-oost/" title="Projecten stadsdeel Oost">Projecten stadsdeel Oost</a></li><li><a href="https://www.haarlem.nl/contact-stadsdeel-oost/" title="Contact stadsdeel Oost">Contact stadsdeel Oost</a></li><li><a href="https://www.haarlem.nl/beheer-en-onderhoud-oost/" title="Beheer en onderhoud Oost">Beheer en onderhoud Oost</a></li><li><a href="https://www.haarlem.nl/inrichting-openbare-ruimte-oost-hior/" title="Inrichting openbare ruimte Oost HIOR">Inrichting openbare ruimte Oost HIOR</a></li></ul></li><li><a href="https://www.haarlem.nl/stadsdeel-schalkwijk/" title="Stadsdeel Schalkwijk">Stadsdeel Schalkwijk</a><ul><li><a href="https://www.haarlem.nl/afvalinzameling/" title="Afvalinzameling">Afvalinzameling</a></li><li class="tab-citydistricts"><a href="https://www.haarlem.nl/wijken-en-buurten-stadsdeel-schalkwijk/" title="Wijken en buurten stadsdeel Schalkwijk">Wijken en buurten stadsdeel Schalkwijk</a></li><li><a href="https://www.haarlem.nl/nieuws-stadsdeel-schalkwijk/" title="Nieuws stadsdeel Schalkwijk">Nieuws stadsdeel Schalkwijk</a></li><li class="tab-governance"><a href="https://www.haarlem.nl/projecten-stadsdeel-schalkwijk/" title="Projecten stadsdeel Schalkwijk">Projecten stadsdeel Schalkwijk</a></li><li><a href="https://www.haarlem.nl/contact-stadsdeel-schalkwijk/" title="Contact stadsdeel Schalkwijk">Contact stadsdeel Schalkwijk</a></li><li><a href="https://www.haarlem.nl/beheer-en-onderhoud-schalkwijk/" title="Beheer en onderhoud Schalkwijk">Beheer en onderhoud Schalkwijk</a></li><li><a href="https://www.haarlem.nl/gebiedsvisies-stadsdeel-schalkwijk/" title="Gebiedsvisies stadsdeel  Schalkwijk">Gebiedsvisies stadsdeel  Schalkwijk</a></li></ul></li><li class="last more"><a href="https://www.haarlem.nl/stadsdeel-zuid-west/" title="Stadsdeel Zuid-West">Stadsdeel Zuid-West<span aria-hidden="true" data-icon="d"></span></a><ul><li><a href="https://www.haarlem.nl/afvalinzameling/" title="Afvalinzameling">Afvalinzameling</a></li><li class="tab-citydistricts"><a href="https://www.haarlem.nl/wijken-en-buurten-stadsdeel-zuid-west/" title="Wijken en buurten stadsdeel Zuid-West">Wijken en buurten stadsdeel Zuid-West</a></li><li><a href="https://www.haarlem.nl/nieuws-stadsdeel-zuid-west/" title="Nieuws stadsdeel Zuid-West">Nieuws stadsdeel Zuid-West</a></li><li class="tab-governance"><a href="https://www.haarlem.nl/projecten-stadsdeel-zuid-west/" title="Projecten stadsdeel Zuid-West">Projecten stadsdeel Zuid-West</a></li><li><a href="https://www.haarlem.nl/contact-stadsdeel-zuid-west/" title="Contact stadsdeel Zuid-West">Contact stadsdeel Zuid-West</a></li><li><a href="https://www.haarlem.nl/beheer-en-onderhoud-zuid-west/" title="Beheer en onderhoud Zuid-West">Beheer en onderhoud Zuid-West</a></li><li><a href="https://www.haarlem.nl/gebiedsvisies-stadsdeel-zuid-west/" title="Gebiedsvisies stadsdeel Zuid-West">Gebiedsvisies stadsdeel Zuid-West</a></li></ul></li></ul></li><li class="tab-governance"><a href="https://www.haarlem.nl/bestuur/" title="Bestuur">Bestuur</a><ul class="sub"><li><a href="https://gemeentebestuur.haarlem.nl/Vergaderingen" title="Vergaderingen">Vergaderingen</a></li><li><a href="https://gemeentebestuur.haarlem.nl/Informatie-over" title="Gemeentebestuur">Gemeentebestuur</a></li><li><a href="https://gemeentebestuur.haarlem.nl/Bestuurlijke-stukken" title="Documenten">Documenten</a></li><li><a href="https://gemeentebestuur.haarlem.nl/Meedoen_/" title="Meedoen">Meedoen</a></li><li><a href="https://gemeentebestuur.haarlem.nl/Vergaderingen/Besluitenlijst-BenW" title="Collegebesluiten">Collegebesluiten</a></li><li><a href="https://gemeentebestuur.haarlem.nl/Vergaderingen" title="Live vergaderingen">Live vergaderingen</a></li><li class="last"><a href="https://www.haarlem.nl/activiteitenlijst-college/" title="Activiteitenlijst college">Activiteitenlijst college</a></li></ul></li></ul></nav>



        <div class="content">
            <div class="wrapper">
                <div class="breadcrumbs"><ol class="breadcrumb"><li><a href="https://www.haarlem.nl/inwoners-en-ondernemers/">Home<span aria-hidden="true" data-icon="1"></span></a></li><li><a href="https://www.haarlem.nl/inwoners-en-ondernemers/" target="_self" title="Inwoners en ondernemers">Inwoners en ondernemers</a> <span aria-hidden="true" data-icon="1"></span></li><li><a href="https://www.haarlem.nl/paspoort-rijbewijs-en-uittreksel/" target="_self" title="Paspoort, rijbewijs en uittreksel">Paspoort, rijbewijs en uittreksel</a> <span aria-hidden="true" data-icon="1"></span></li><li class="active">Uittreksel persoonsgegevens</li></ol></div>
            </div>
            <div id="content" class="detail wrapper">
                <!--TYPO3SEARCH_begin-->
                <div>
                    <!--DMAILER_SECTION_BOUNDARY_--><h1 class="csc-firstHeader">Uittreksel persoonsgegevens</h1><p>Een uittreksel uit de basisregistratie personen (BRP) is een bewijs dat u in de gemeente Haarlem bent ingeschreven. Regel direct online een uittreksel waar en wanneer het u uitkomt. Vraagt u op een werkdag voor 11.00 uur&nbsp;het uittreksel online aan dan wordt het nog dezelfde dag per post verzonden. Het bevat minimaal uw naam, adres, geboortedatum en geboorteplaats. Vraag bij de instantie waarvoor u een uittreksel aanvraagt welke gegevens er nog meer op het uittreksel moeten staan.</p><!--DMAILER_SECTION_BOUNDARY_END--><!--DMAILER_SECTION_BOUNDARY_-->

        <p class="button-set">
            <a href="https://www.haarlem.nl/ufs/ufsmain?formid=uittreksel" title="Regel online" class="button-contrast">
                <span aria-hidden="true" data-icon="i"></span>
                Regel online
            </a>

                    <span>U heeft voor het invullen uw DigiD nodig.  Een geboorte-, huwelijks- of overlijdensakte vraagt u aan op de pagina Akte burgerlijke stand</span>

        </p>
    <!--DMAILER_SECTION_BOUNDARY_END--><!--DMAILER_SECTION_BOUNDARY_-->





    <div class="accordion " id="accordion-panels-2814">




                        <section id="accordion-panel-2814-1" class=" image--style-full-width text--left">






                                    <h2><a href="https://www.haarlem.nl/uittreksel-persoonsgegevens/#accordion-panel-2814-1">Wie kan aanvragen<span aria-hidden="true" data-icon="h"></span></a></h2>



                            <div>


                                        <p>U kunt een uittreksel aanvragen voor:</p><ul class="list-check"><li>uzelf</li><li>uw kind dat jonger is dan 16 jaar en op hetzelfde adres woont als u.</li></ul>


                            </div>

                        </section>






                        <section id="accordion-panel-2814-2" class=" image--style-full-width text--left">






                                    <h2><a href="https://www.haarlem.nl/uittreksel-persoonsgegevens/#accordion-panel-2814-2">Kosten<span aria-hidden="true" data-icon="h"></span></a></h2>



                            <div>


                                        <p>Een uittreksel kost € 18,10.</p>
    <p>U kunt in het webformulier&nbsp;betalen met iDeal of creditcard</p>


                            </div>

                        </section>






                        <section id="accordion-panel-2814-3" class=" image--style-full-width text--left">






                                    <h2><a href="https://www.haarlem.nl/uittreksel-persoonsgegevens/#accordion-panel-2814-3">Aanvragen in de publiekshal<span aria-hidden="true" data-icon="h"></span></a></h2>



                            <div>


                                        <p>U kunt een uittreksel in de publiekshal opvragen. Na betaling krijgt u het uittreksel direct mee. Neem uw legitimatiebewijs mee als u naar de publiekshal komt.</p>
    <p>De gemeente werkt op afspraak van maandag tot en met vrijdag tussen 11.00 en 16.00 uur en op donderdag tussen 11.00 en 20.00 uur. Tussen 9.00 en 11.00 uur kunt u zonder afspraak terecht in de publiekshal. Houdt rekening met wachttijden als u tussen 9.00 en 11.00 uur naar de publiekshal komt. </p>
    <p><a href="https://www.haarlem.nl/ufs/afspraak.eb?context=uittreksel" title="Deze interne link wordt in het huidige venster geopend." target="_top" class="external-link">Maak direct online uw afspraak</a> </p>


                            </div>

                        </section>






                        <section id="accordion-panel-2814-4" class=" image--style-full-width text--left">






                                    <h2><a href="https://www.haarlem.nl/uittreksel-persoonsgegevens/#accordion-panel-2814-4">Bewijs van in leven zijn (attestatie de vita)<span aria-hidden="true" data-icon="h"></span></a></h2>



                            <div>


                                        <p>Met een bewijs van in leven zijn (attestatie de vita) kunt u schriftelijk bewijzen dat u op het moment van afgifte in leven bent. U kunt het bewijs nodig hebben voor pensioenfondsen of andere uitkeringsinstanties.</p>
    <p>U krijgt het bewijs van in leven zijn gratis als u een brief van uw pensioenfonds heeft waaruit blijkt dat het bewijs nodig is voor uw pensioen. Als u het uittreksel in de publiekshal komt aanvragen, neem dan een kopie van deze brief mee.</p>


                            </div>

                        </section>






                        <section id="accordion-panel-2814-5" class=" image--style-full-width text--left">






                                    <h2><a href="https://www.haarlem.nl/uittreksel-persoonsgegevens/#accordion-panel-2814-5">Bewijs van Nederlanderschap<span aria-hidden="true" data-icon="h"></span></a></h2>



                            <div>


                                        <p>Een bewijs van Nederlanderschap is een verklaring van de gemeente dat u in het bezit bent van de Nederlandse nationaliteit. U kunt het bewijs nodig hebben voor bepaalde banen.</p>


                            </div>

                        </section>






                        <section id="accordion-panel-2814-6" class=" image--style-full-width text--left">






                                    <h2><a href="https://www.haarlem.nl/uittreksel-persoonsgegevens/#accordion-panel-2814-6">Machtigen<span aria-hidden="true" data-icon="h"></span></a></h2>



                            <div>


                                        <p>Kunt u niet persoonlijk langskomen? Dan kunt u iemand anders machtigen met het machtigingsformulier.&nbsp;De gemachtigde neemt mee naar de publiekshal:</p><ul class="list-check"><li>het volledig ingevulde en door u ondertekende machtigingsformulier </li><li>een kopie van uw legitimatiebewijs (paspoort, rijbewijs of Nederlandse identiteitskaart)</li><li>een geldig legitimatiebewijs</li></ul><p><a href="https://www.haarlem.nl/bestandsopslag/bestanden/Paspoort_rijbewijs_en_uittreksel/machtiging_uittreksels.pdf" title="Dit bestand downloaden." class="download">Machtigingsformulier uittreksels</a> (pdf)</p>


                            </div>

                        </section>






                        <section id="accordion-panel-2814-7" class=" image--style-full-width text--left">






                                    <h2><a href="https://www.haarlem.nl/uittreksel-persoonsgegevens/#accordion-panel-2814-7">U staat niet ingeschreven in Nederland<span aria-hidden="true" data-icon="h"></span></a></h2>



                            <div>


                                        <p>U heeft een uittreksel nodig, maar u staat niet ingeschreven in een Nederlandse gemeente? <br>Bij een&nbsp;RNI-gemeente kunt u terecht voor een uittreksel. RNI is de afkorting voor Registratie Niet-Ingezetenen. De RNI-gemeenten zijn Alkmaar, Almelo, Amsterdam, Breda, Den Haag, Doetinchem, Eindhoven, Groningen, Goes, Heerlen, Leeuwarden, Leiden, Nijmegen, Rotterdam, Terneuzen, Utrecht, Venlo en Zwolle. </p>
    <p><a href="http://www.rijksoverheid.nl/onderwerpen/persoonsgegevens/vraag-en-antwoord/wat-is-de-registratie-niet-ingezetenen-rni.html" title="Deze externe link wordt in een nieuw venster geopend." target="_blank" class="external-link-new-window">Registratie Niet-Ingezetenen&nbsp;(RNI)&nbsp;op Rijksoverheid.nl </a></p>


                            </div>

                        </section>



    </div>
    <!--DMAILER_SECTION_BOUNDARY_END-->

                        <ul class="page-actions">
                            <li>
                                <a href="javascript:window.print()" class="print">
                                    <span aria-hidden="true" data-icon="r"></span>Print deze pagina
                                </a>
                            </li>
                            <li>
                                <a href="https://www.haarlem.nl/uittreksel-persoonsgegevens/#top" class="toTop">
                                    <span aria-hidden="true" data-icon="v"></span>Terug naar boven
                                </a>
                            </li>
                        </ul>

                </div>
                <!--TYPO3SEARCH_end-->
                <aside class="related">
                    <span class="plusminus" data-icon="h"></span>
                    <!--DMAILER_SECTION_BOUNDARY_--><h2>Gerelateerde onderwerpen</h2>
    <ul>


                    <li>
                        <a href="https://www.haarlem.nl/inzage-en-correctie-persoonsgegevens/">Inzage en correctie persoonsgegevens</a>
                    </li>



                    <li>
                        <a href="https://www.haarlem.nl/akte-burgerlijke-stand/">Akte burgerlijke stand</a>
                    </li>


    </ul>
    <!--DMAILER_SECTION_BOUNDARY_END-->
                    <div class="kennisbank">
                        <!--TYPO3SEARCH_begin-->

                        <!--TYPO3SEARCH_end-->
                    </div>
                </aside>
            </div>
        </div>


        <div class="footer-section">
    	<div class="container">
    		<div class="row">
    			<div class="col-sm-4">

    			</div>
    			<div class="col-sm-4">

    			</div>
    			<div class="col-sm-4">

    			</div>
    		</div>
    	</div>
    </div>


    <footer class="footer">
    	<h2 class="visuallyhidden">Informatie en Contact</h2>
    	<div class="wrapper">
    		<a href="https://www.haarlem.nl/inwoners-en-ondernemers/"><img src="./assets/logo.png" class="logo" alt="Logo Gemeente Haarlem - Home" width="250" height="167"></a>
    		<ul class="footerMenu"><li> <a href="https://www.haarlem.nl/werken-bij-de-gemeente-haarlem/" title="Werken bij de gemeente"><span aria-hidden="true" data-icon="1"></span>Werken bij de gemeente</a> </li><li> <a href="https://www.haarlem.nl/contact/" title="Contact"><span aria-hidden="true" data-icon="1"></span>Contact</a> </li><li> <a href="https://www.haarlem.nl/nieuws-en-actualiteiten/" title="Nieuws en actualiteiten"><span aria-hidden="true" data-icon="1"></span>Nieuws en actualiteiten</a> </li><li> <a href="https://www.haarlem.nl/sitemap/" title="Sitemap"><span aria-hidden="true" data-icon="1"></span>Sitemap</a> </li><li> <a href="https://www.haarlem.nl/over-deze-website/" title="Over deze website"><span aria-hidden="true" data-icon="1"></span>Over deze website</a> </li></ul>
    		<div class="social-links">
    			<ul>
    				<li>
    					<a title="WhatsApp gegevens gemeente Haarlem" href="https://www.haarlem.nl/telefoonnummer-gemeente/">
    						<span class="icon-whatsapp" data-icon="" aria-hidden="true"></span><span class="visuallyhidden">WhatsApp gegevens gemeente Haarlem</span>
    					</a>
    				</li>
    				<li>
    					<a title="Twitter profiel gemeente Haarlem" href="https://twitter.com/gemeentehaarlem">
    						<span class="icon-twitter" data-icon="A" aria-hidden="true"></span><span class="visuallyhidden">Twitter profiel gemeente Haarlem</span>
    					</a>
    				</li>
    				<li>
    					<a title="Facebook pagina gemeente Haarlem" href="https://www.facebook.com/gemeente.haarlem">
    						<span class="icon-facebook" data-icon="B" aria-hidden="true"></span><span class="visuallyhidden">Facebook pagina gemeente Haarlem</span>
    					</a>
    				</li>

    			</ul>
    		</div>
    	</div>
    </footer>


    </div>
    <div id="js-width" style=""></div></body></html>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
</style>
