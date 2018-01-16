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
          <ul class="top-links">
            <li class="top-link"><a href="http://www.haarlemmarketing.nl/bezoeken/" title="Toeristische informatie" rel="external">Toeristische informatie<span class="screen-reader-text"> (externe website)</span><span aria-hidden="true" data-icon="q"></span></a></li>
          </ul>
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
      <nav id="navigation">
        <h2 class="visuallyhidden">Navigatie</h2>
        <ul class="wrapper">
          <li class="tab-citizens is-selected"><a href="https://www.haarlem.nl/inwoners-en-ondernemers/" title="Inwoners en ondernemers">Inwoners en ondernemers</a>
            <ul class="sub">
              <li class="is-selected"><a href="https://www.haarlem.nl/paspoort-rijbewijs-en-uittreksel/" title="Paspoort, rijbewijs en uittreksel">Paspoort, rijbewijs en uittreksel</a>
                <ul>
                  <li><a href="https://www.haarlem.nl/paspoort/" title="Paspoort">Paspoort</a></li>
                  <li><a href="https://www.haarlem.nl/rijbewijs/" title="Rijbewijs">Rijbewijs</a></li>
                  <li class="is-selected"><a href="https://www.haarlem.nl/uittreksel-persoonsgegevens/" title="Uittreksel persoonsgegevens">Uittreksel persoonsgegevens</a></li>
                  <li><a href="https://www.haarlem.nl/nederlandse-identiteitskaart/" title="Nederlandse identiteitskaart">Nederlandse identiteitskaart</a></li>
                  <li><a href="https://www.haarlem.nl/akte-burgerlijke-stand/" title="Akte burgerlijke stand">Akte burgerlijke stand</a></li>
                  <li><a href="https://www.haarlem.nl/inzage-en-correctie-persoonsgegevens/" title="Inzage en correctie persoonsgegevens">Inzage en correctie persoonsgegevens</a></li>
                  <li><a href="https://www.haarlem.nl/paspoort-rijbewijs-en-uittreksel/" title="Meer onderwerpen paspoort, rijbewijs en uitreksel">Meer onderwerpen</a></li>
                </ul>
              </li>
              <li><a href="https://www.haarlem.nl/parkeren-verkeer-en-vervoer/" title="Parkeren, verkeer en vervoer">Parkeren, verkeer en vervoer</a>
                <ul>
                  <li><a href="https://www.haarlem.nl/parkeervergunning-particulier/" title="Parkeervergunning particulier">Parkeervergunning particulier</a></li>
                  <li><a href="https://www.haarlem.nl/parkeervergunning-bedrijf/" title="Parkeervergunning bedrijf">Parkeervergunning bedrijf</a></li>
                  <li><a href="https://www.haarlem.nl/parkeervergunning-bezoekers/" title="Parkeervergunning bezoekers">Parkeervergunning bezoekers</a></li>
                  <li><a href="https://www.haarlem.nl/tijdelijke-parkeerontheffing/" title="Tijdelijke parkeerontheffing">Tijdelijke parkeerontheffing</a></li>
                  <li><a href="https://www.haarlem.nl/parkeertarieven-op-straat-en-in-garages/" title="Parkeertarieven op straat en in garages">Parkeertarieven op straat en in garages</a></li>
                  <li><a href="https://www.haarlem.nl/parkeervergunning-binnenstad/" title="Parkeervergunning binnenstad">Parkeervergunning binnenstad</a></li>
                  <li><a href="https://www.haarlem.nl/parkeren-verkeer-en-vervoer/" title="Meer onderwerpen parkeren, verkeer en vervoer">Meer onderwerpen</a></li>
                </ul>
              </li>
              <li><a href="https://www.haarlem.nl/afval-en-milieu/" title="Afval en milieu">Afval en milieu</a>
                <ul>
                  <li><a href="https://www.haarlem.nl/afvalinzameling/" title="Afvalinzameling">Afvalinzameling</a></li>
                  <li><a href="https://www.haarlem.nl/afval-scheiden/" title="Afval scheiden">Afval scheiden</a></li>
                  <li><a href="https://www.haarlem.nl/milieuplein/" title="Milieuplein">Milieuplein</a></li>
                  <li><a href="https://www.haarlem.nl/grofvuil/" title="Grofvuil">Grofvuil</a></li>
                  <li><a href="https://www.haarlem.nl/bodeminformatie-voor-verkopers-en-kopers/" title="Bodeminformatie voor verkopers en kopers">Bodeminformatie voor verkopers en kopers</a></li>
                  <li><a href="https://www.haarlem.nl/afvalpas/" title="Afvalpas">Afvalpas</a></li>
                  <li><a href="https://www.haarlem.nl/afval-en-milieu/" title="Meer onderwerpen afval en milieu">Meer onderwerpen</a></li>
                </ul>
              </li>
              <li><a href="https://www.haarlem.nl/geboorte-huwelijk-en-overlijden/" title="Geboorte, huwelijk en overlijden">Geboorte, huwelijk en overlijden</a>
                <ul>
                  <li><a href="https://www.haarlem.nl/geboorteaangifte/" title="Geboorteaangifte">Geboorteaangifte</a></li>
                  <li><a href="https://www.haarlem.nl/erkenning-en-ouderlijk-gezag/" title="Erkenning en ouderlijk gezag">Erkenning en ouderlijk gezag</a></li>
                  <li><a href="https://www.haarlem.nl/trouwen/" title="Trouwen">Trouwen</a></li>
                  <li><a href="https://www.haarlem.nl/overlijden-doorgeven/" title="Overlijden doorgeven">Overlijden doorgeven</a></li>
                  <li><a href="https://www.haarlem.nl/registratie-buitenlands-huwelijk/" title="Registratie buitenlands huwelijk">Registratie buitenlands huwelijk</a></li>
                  <li><a href="https://www.haarlem.nl/geboorte-huwelijk-en-overlijden/" title="Meer onderwerpen geboorte, huwelijk en overlijden">Meer onderwerpen</a></li>
                  <li><a href="https://www.haarlem.nl/akte-burgerlijke-stand/" title="Akte burgerlijke stand">Akte burgerlijke stand</a></li>
                </ul>
              </li>
              <li class="last more"><a href="https://www.haarlem.nl/meer-onderwerpen/" title="Meer onderwerpen...">Meer onderwerpen...<span aria-hidden="true" data-icon="d"></span></a>
                <ul>
                  <li class="tab-citizens"><a href="https://www.haarlem.nl/wmo-zorg-en-welzijn/" title="Wmo, zorg en welzijn">Wmo, zorg en welzijn</a></li>
                  <li class="tab-citydistricts"><a href="https://www.haarlem.nl/bouwen-en-verbouwen/" title="Bouwen en verbouwen">Bouwen en verbouwen</a></li>
                  <li class="tab-governance"><a href="https://www.haarlem.nl/contact/" title="Contact">Contact</a></li>
                  <li><a href="https://www.haarlem.nl/gemeentelijke-belastingen/" title="Gemeentelijke belastingen">Gemeentelijke belastingen</a></li>
                  <li><a href="https://www.haarlem.nl/ondernemen/" title="Ondernemen">Ondernemen</a></li>
                  <li class="tab-governance"><a href="https://www.haarlem.nl/subsidies-vergoedingen-en-leningen/" title="Subsidies, vergoedingen en leningen">Subsidies, vergoedingen en leningen</a></li>
                  <li><a href="https://www.haarlem.nl/meer-onderwerpen/" title="Meer rubrieken inwoners en ondernemers">Overzichtspagina</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="tab-citydistricts"><a href="https://www.haarlem.nl/stadsdelen/" title="Stadsdelen">Stadsdelen</a>
            <ul class="sub">
              <li><a href="https://www.haarlem.nl/stadsdeel-centrum/" title="Stadsdeel Centrum">Stadsdeel Centrum</a>
                <ul>
                  <li><a href="https://www.haarlem.nl/afvalinzameling/" title="Afvalinzameling">Afvalinzameling</a></li>
                  <li class="tab-citydistricts"><a href="https://www.haarlem.nl/wijk-en-buurten-stadsdeel-centrum/" title="Wijk en buurten stadsdeel Centrum">Wijk en buurten stadsdeel Centrum</a></li>
                  <li><a href="https://www.haarlem.nl/nieuws-stadsdeel-centrum/" title="Nieuws stadsdeel Centrum">Nieuws stadsdeel Centrum</a></li>
                  <li class="tab-governance"><a href="https://www.haarlem.nl/projecten-stadsdeel-centrum/" title="Projecten stadsdeel Centrum">Projecten stadsdeel Centrum</a></li>
                  <li><a href="https://www.haarlem.nl/contact-stadsdeel-centrum/" title="Contact stadsdeel Centrum">Contact stadsdeel Centrum</a></li>
                  <li><a href="https://www.haarlem.nl/beheer-en-onderhoud-centrum/" title="Beheer en onderhoud Centrum">Beheer en onderhoud Centrum</a></li>
                </ul>
              </li>
              <li><a href="https://www.haarlem.nl/stadsdeel-noord/" title="Stadsdeel Noord">Stadsdeel Noord</a>
                <ul>
                  <li><a href="https://www.haarlem.nl/afvalinzameling/" title="Afvalinzameling">Afvalinzameling</a></li>
                  <li class="tab-citydistricts"><a href="https://www.haarlem.nl/wijken-en-buurten-stadsdeel-noord/" title="Wijken en buurten stadsdeel Noord">Wijken en buurten stadsdeel Noord</a></li>
                  <li><a href="https://www.haarlem.nl/nieuws-stadsdeel-noord/" title="Nieuws stadsdeel Noord">Nieuws stadsdeel Noord</a></li>
                  <li class="tab-governance"><a href="https://www.haarlem.nl/projecten-stadsdeel-noord/" title="Projecten stadsdeel Noord">Projecten stadsdeel Noord</a></li>
                  <li><a href="https://www.haarlem.nl/contact-stadsdeel-noord/" title="Contact stadsdeel Noord">Contact stadsdeel Noord</a></li>
                  <li><a href="https://www.haarlem.nl/beheer-en-onderhoud-noord/" title="Beheer en onderhoud Noord">Beheer en onderhoud Noord</a></li>
                  <li><a href="https://www.haarlem.nl/wijkcontract-indischebuurt-noord/" title="Wijkcontract Indischebuurt Noord">Wijkcontract Indischebuurt Noord</a></li>
                </ul>
              </li>
              <li><a href="https://www.haarlem.nl/stadsdeel-oost/" title="Stadsdeel Oost">Stadsdeel Oost</a>
                <ul>
                  <li><a href="https://www.haarlem.nl/afvalinzameling/" title="Afvalinzameling">Afvalinzameling</a></li>
                  <li class="tab-citydistricts"><a href="https://www.haarlem.nl/wijken-en-buurten-stadsdeel-oost/" title="Wijken en buurten stadsdeel Oost">Wijken en buurten stadsdeel Oost</a></li>
                  <li><a href="https://www.haarlem.nl/nieuws-stadsdeel-oost/" title="Nieuws stadsdeel Oost">Nieuws stadsdeel Oost</a></li>
                  <li class="tab-governance"><a href="https://www.haarlem.nl/projecten-stadsdeel-oost/" title="Projecten stadsdeel Oost">Projecten stadsdeel Oost</a></li>
                  <li><a href="https://www.haarlem.nl/contact-stadsdeel-oost/" title="Contact stadsdeel Oost">Contact stadsdeel Oost</a></li>
                  <li><a href="https://www.haarlem.nl/beheer-en-onderhoud-oost/" title="Beheer en onderhoud Oost">Beheer en onderhoud Oost</a></li>
                  <li><a href="https://www.haarlem.nl/inrichting-openbare-ruimte-oost-hior/" title="Inrichting openbare ruimte Oost HIOR">Inrichting openbare ruimte Oost HIOR</a></li>
                </ul>
              </li>
              <li><a href="https://www.haarlem.nl/stadsdeel-schalkwijk/" title="Stadsdeel Schalkwijk">Stadsdeel Schalkwijk</a>
                <ul>
                  <li><a href="https://www.haarlem.nl/afvalinzameling/" title="Afvalinzameling">Afvalinzameling</a></li>
                  <li class="tab-citydistricts"><a href="https://www.haarlem.nl/wijken-en-buurten-stadsdeel-schalkwijk/" title="Wijken en buurten stadsdeel Schalkwijk">Wijken en buurten stadsdeel Schalkwijk</a></li>
                  <li><a href="https://www.haarlem.nl/nieuws-stadsdeel-schalkwijk/" title="Nieuws stadsdeel Schalkwijk">Nieuws stadsdeel Schalkwijk</a></li>
                  <li class="tab-governance"><a href="https://www.haarlem.nl/projecten-stadsdeel-schalkwijk/" title="Projecten stadsdeel Schalkwijk">Projecten stadsdeel Schalkwijk</a></li>
                  <li><a href="https://www.haarlem.nl/contact-stadsdeel-schalkwijk/" title="Contact stadsdeel Schalkwijk">Contact stadsdeel Schalkwijk</a></li>
                  <li><a href="https://www.haarlem.nl/beheer-en-onderhoud-schalkwijk/" title="Beheer en onderhoud Schalkwijk">Beheer en onderhoud Schalkwijk</a></li>
                  <li><a href="https://www.haarlem.nl/gebiedsvisies-stadsdeel-schalkwijk/" title="Gebiedsvisies stadsdeel  Schalkwijk">Gebiedsvisies stadsdeel  Schalkwijk</a></li>
                </ul>
              </li>
              <li class="last more"><a href="https://www.haarlem.nl/stadsdeel-zuid-west/" title="Stadsdeel Zuid-West">Stadsdeel Zuid-West<span aria-hidden="true" data-icon="d"></span></a>
                <ul>
                  <li><a href="https://www.haarlem.nl/afvalinzameling/" title="Afvalinzameling">Afvalinzameling</a></li>
                  <li class="tab-citydistricts"><a href="https://www.haarlem.nl/wijken-en-buurten-stadsdeel-zuid-west/" title="Wijken en buurten stadsdeel Zuid-West">Wijken en buurten stadsdeel Zuid-West</a></li>
                  <li><a href="https://www.haarlem.nl/nieuws-stadsdeel-zuid-west/" title="Nieuws stadsdeel Zuid-West">Nieuws stadsdeel Zuid-West</a></li>
                  <li class="tab-governance"><a href="https://www.haarlem.nl/projecten-stadsdeel-zuid-west/" title="Projecten stadsdeel Zuid-West">Projecten stadsdeel Zuid-West</a></li>
                  <li><a href="https://www.haarlem.nl/contact-stadsdeel-zuid-west/" title="Contact stadsdeel Zuid-West">Contact stadsdeel Zuid-West</a></li>
                  <li><a href="https://www.haarlem.nl/beheer-en-onderhoud-zuid-west/" title="Beheer en onderhoud Zuid-West">Beheer en onderhoud Zuid-West</a></li>
                  <li><a href="https://www.haarlem.nl/gebiedsvisies-stadsdeel-zuid-west/" title="Gebiedsvisies stadsdeel Zuid-West">Gebiedsvisies stadsdeel Zuid-West</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="tab-governance"><a href="https://www.haarlem.nl/bestuur/" title="Bestuur">Bestuur</a>
            <ul class="sub">
              <li><a href="https://gemeentebestuur.haarlem.nl/Vergaderingen" title="Vergaderingen">Vergaderingen</a></li>
              <li><a href="https://gemeentebestuur.haarlem.nl/Informatie-over" title="Gemeentebestuur">Gemeentebestuur</a></li>
              <li><a href="https://gemeentebestuur.haarlem.nl/Bestuurlijke-stukken" title="Documenten">Documenten</a></li>
              <li><a href="https://gemeentebestuur.haarlem.nl/Meedoen_/" title="Meedoen">Meedoen</a></li>
              <li><a href="https://gemeentebestuur.haarlem.nl/Vergaderingen/Besluitenlijst-BenW" title="Collegebesluiten">Collegebesluiten</a></li>
              <li><a href="https://gemeentebestuur.haarlem.nl/Vergaderingen" title="Live vergaderingen">Live vergaderingen</a></li>
              <li class="last"><a href="https://www.haarlem.nl/activiteitenlijst-college/" title="Activiteitenlijst college">Activiteitenlijst college</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="content">
        <div class="wrapper">
          <div class="breadcrumbs">
            <ol class="breadcrumb">
              <li><a href="https://www.haarlem.nl/inwoners-en-ondernemers/">Home<span aria-hidden="true" data-icon="1"></span></a></li>
              <li><a href="https://www.haarlem.nl/inwoners-en-ondernemers/" target="_self" title="Inwoners en ondernemers">Inwoners en ondernemers</a> <span aria-hidden="true" data-icon="1"></span></li>
              <li><a href="https://www.haarlem.nl/paspoort-rijbewijs-en-uittreksel/" target="_self" title="Paspoort, rijbewijs en uittreksel">Paspoort, rijbewijs en uittreksel</a> <span aria-hidden="true" data-icon="1"></span></li>
              <li class="active">Uittreksel persoonsgegevens</li>
            </ol>
          </div>
        </div>
        <router-view></router-view>
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
          <ul class="footerMenu">
            <li> <a href="https://www.haarlem.nl/werken-bij-de-gemeente-haarlem/" title="Werken bij de gemeente"><span aria-hidden="true" data-icon="1"></span>Werken bij de gemeente</a> </li>
            <li> <a href="https://www.haarlem.nl/contact/" title="Contact"><span aria-hidden="true" data-icon="1"></span>Contact</a> </li>
            <li> <a href="https://www.haarlem.nl/nieuws-en-actualiteiten/" title="Nieuws en actualiteiten"><span aria-hidden="true" data-icon="1"></span>Nieuws en actualiteiten</a> </li>
            <li> <a href="https://www.haarlem.nl/sitemap/" title="Sitemap"><span aria-hidden="true" data-icon="1"></span>Sitemap</a> </li>
            <li> <a href="https://www.haarlem.nl/over-deze-website/" title="Over deze website"><span aria-hidden="true" data-icon="1"></span>Over deze website</a> </li>
          </ul>
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
    <div id="js-width" style=""></div>
  </body>

  </html>
</div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="css">
.vue-progress-path{display:inline-block}.vue-progress-path path{fill:none;stroke-width:6;transition:stroke-dashoffset .3s ease-in-out}.vue-progress-path .background{stroke:#ddd}.vue-progress-path .progress{stroke:#40b883}.vue-progress-path.indeterminate path{transition:none}
</style>
