<template>
<div id="app">
  <body>
    <div>
      <header class="header">
        <div class="wrapper">
          <div id="top" class="top">
            <a class="button-basic" id="button-menu">
    				<span aria-hidden="true" data-icon="b"></span>
    				Menu
    			</a>
            <h1 class="logo">
    				<a title="Gemeente Haarlem"> Gemeente <span>Haarlem</span></a>
    			</h1>
            <ul class="skip-links">
              <li><a>Naar de inhoud</a></li>
              <li><a>Naar hoofdnavigatie</a></li>
            </ul>
            <a class="button-basic" id="button-search">
    				<span aria-hidden="true" data-icon="d"></span>
    				Zoek
    			</a>
          </div>
          <ul class="top-links">
            <li class="top-link"><a title="Toeristische informatie" rel="external">Toeristische informatie<span class="screen-reader-text"> (externe website)</span><span aria-hidden="true" data-icon="q"></span></a></li>
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
          <li class="tab-citizens is-selected"><a title="Inwoners en ondernemers">Inwoners en ondernemers</a>
            <ul class="sub">
              <li class="is-selected"><a title="Paspoort, rijbewijs en uittreksel">Paspoort, rijbewijs en uittreksel</a>
                <ul>
                  <li><a title="Paspoort">Paspoort</a></li>
                  <li><a title="Rijbewijs">Rijbewijs</a></li>
                  <li class="is-selected"><a title="Uittreksel persoonsgegevens">Uittreksel persoonsgegevens</a></li>
                  <li><a title="Nederlandse identiteitskaart">Nederlandse identiteitskaart</a></li>
                  <li><a title="Akte burgerlijke stand">Akte burgerlijke stand</a></li>
                  <li><a title="Inzage en correctie persoonsgegevens">Inzage en correctie persoonsgegevens</a></li>
                  <li><a title="Meer onderwerpen paspoort, rijbewijs en uitreksel">Meer onderwerpen</a></li>
                </ul>
              </li>
              <li><a title="Parkeren, verkeer en vervoer">Parkeren, verkeer en vervoer</a>
                <ul>
                  <li><a title="Parkeervergunning particulier">Parkeervergunning particulier</a></li>
                  <li><a title="Parkeervergunning bedrijf">Parkeervergunning bedrijf</a></li>
                  <li><a title="Parkeervergunning bezoekers">Parkeervergunning bezoekers</a></li>
                  <li><a title="Tijdelijke parkeerontheffing">Tijdelijke parkeerontheffing</a></li>
                  <li><a title="Parkeertarieven op straat en in garages">Parkeertarieven op straat en in garages</a></li>
                  <li><a title="Parkeervergunning binnenstad">Parkeervergunning binnenstad</a></li>
                  <li><a title="Meer onderwerpen parkeren, verkeer en vervoer">Meer onderwerpen</a></li>
                </ul>
              </li>
              <li><a title="Afval en milieu">Afval en milieu</a>
                <ul>
                  <li><a title="Afvalinzameling">Afvalinzameling</a></li>
                  <li><a title="Afval scheiden">Afval scheiden</a></li>
                  <li><a title="Milieuplein">Milieuplein</a></li>
                  <li><a title="Grofvuil">Grofvuil</a></li>
                  <li><a title="Bodeminformatie voor verkopers en kopers">Bodeminformatie voor verkopers en kopers</a></li>
                  <li><a title="Afvalpas">Afvalpas</a></li>
                  <li><a title="Meer onderwerpen afval en milieu">Meer onderwerpen</a></li>
                </ul>
              </li>
              <li><a title="Geboorte, huwelijk en overlijden">Geboorte, huwelijk en overlijden</a>
                <ul>
                  <li><a title="Geboorteaangifte">Geboorteaangifte</a></li>
                  <li><a title="Erkenning en ouderlijk gezag">Erkenning en ouderlijk gezag</a></li>
                  <li><a title="Trouwen">Trouwen</a></li>
                  <li><a title="Overlijden doorgeven">Overlijden doorgeven</a></li>
                  <li><a title="Registratie buitenlands huwelijk">Registratie buitenlands huwelijk</a></li>
                  <li><a title="Meer onderwerpen geboorte, huwelijk en overlijden">Meer onderwerpen</a></li>
                  <li><a title="Akte burgerlijke stand">Akte burgerlijke stand</a></li>
                </ul>
              </li>
              <li class="last more"><a title="Meer onderwerpen...">Meer onderwerpen...<span aria-hidden="true" data-icon="d"></span></a>
                <ul>
                  <li class="tab-citizens"><a title="Wmo, zorg en welzijn">Wmo, zorg en welzijn</a></li>
                  <li class="tab-citydistricts"><a title="Bouwen en verbouwen">Bouwen en verbouwen</a></li>
                  <li class="tab-governance"><a title="Contact">Contact</a></li>
                  <li><a title="Gemeentelijke belastingen">Gemeentelijke belastingen</a></li>
                  <li><a title="Ondernemen">Ondernemen</a></li>
                  <li class="tab-governance"><a title="Subsidies, vergoedingen en leningen">Subsidies, vergoedingen en leningen</a></li>
                  <li><a title="Meer rubrieken inwoners en ondernemers">Overzichtspagina</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="tab-citydistricts"><a title="Stadsdelen">Stadsdelen</a>
            <ul class="sub">
              <li><a title="Stadsdeel Centrum">Stadsdeel Centrum</a>
                <ul>
                  <li><a title="Afvalinzameling">Afvalinzameling</a></li>
                  <li class="tab-citydistricts"><a title="Wijk en buurten stadsdeel Centrum">Wijk en buurten stadsdeel Centrum</a></li>
                  <li><a title="Nieuws stadsdeel Centrum">Nieuws stadsdeel Centrum</a></li>
                  <li class="tab-governance"><a title="Projecten stadsdeel Centrum">Projecten stadsdeel Centrum</a></li>
                  <li><a title="Contact stadsdeel Centrum">Contact stadsdeel Centrum</a></li>
                  <li><a title="Beheer en onderhoud Centrum">Beheer en onderhoud Centrum</a></li>
                </ul>
              </li>
              <li><a title="Stadsdeel Noord">Stadsdeel Noord</a>
                <ul>
                  <li><a title="Afvalinzameling">Afvalinzameling</a></li>
                  <li class="tab-citydistricts"><a title="Wijken en buurten stadsdeel Noord">Wijken en buurten stadsdeel Noord</a></li>
                  <li><a title="Nieuws stadsdeel Noord">Nieuws stadsdeel Noord</a></li>
                  <li class="tab-governance"><a title="Projecten stadsdeel Noord">Projecten stadsdeel Noord</a></li>
                  <li><a title="Contact stadsdeel Noord">Contact stadsdeel Noord</a></li>
                  <li><a title="Beheer en onderhoud Noord">Beheer en onderhoud Noord</a></li>
                  <li><a title="Wijkcontract Indischebuurt Noord">Wijkcontract Indischebuurt Noord</a></li>
                </ul>
              </li>
              <li><a title="Stadsdeel Oost">Stadsdeel Oost</a>
                <ul>
                  <li><a title="Afvalinzameling">Afvalinzameling</a></li>
                  <li class="tab-citydistricts"><a title="Wijken en buurten stadsdeel Oost">Wijken en buurten stadsdeel Oost</a></li>
                  <li><a title="Nieuws stadsdeel Oost">Nieuws stadsdeel Oost</a></li>
                  <li class="tab-governance"><a title="Projecten stadsdeel Oost">Projecten stadsdeel Oost</a></li>
                  <li><a title="Contact stadsdeel Oost">Contact stadsdeel Oost</a></li>
                  <li><a title="Beheer en onderhoud Oost">Beheer en onderhoud Oost</a></li>
                  <li><a title="Inrichting openbare ruimte Oost HIOR">Inrichting openbare ruimte Oost HIOR</a></li>
                </ul>
              </li>
              <li><a title="Stadsdeel Schalkwijk">Stadsdeel Schalkwijk</a>
                <ul>
                  <li><a title="Afvalinzameling">Afvalinzameling</a></li>
                  <li class="tab-citydistricts"><a title="Wijken en buurten stadsdeel Schalkwijk">Wijken en buurten stadsdeel Schalkwijk</a></li>
                  <li><a title="Nieuws stadsdeel Schalkwijk">Nieuws stadsdeel Schalkwijk</a></li>
                  <li class="tab-governance"><a title="Projecten stadsdeel Schalkwijk">Projecten stadsdeel Schalkwijk</a></li>
                  <li><a title="Contact stadsdeel Schalkwijk">Contact stadsdeel Schalkwijk</a></li>
                  <li><a title="Beheer en onderhoud Schalkwijk">Beheer en onderhoud Schalkwijk</a></li>
                  <li><a title="Gebiedsvisies stadsdeel  Schalkwijk">Gebiedsvisies stadsdeel  Schalkwijk</a></li>
                </ul>
              </li>
              <li class="last more"><a title="Stadsdeel Zuid-West">Stadsdeel Zuid-West<span aria-hidden="true" data-icon="d"></span></a>
                <ul>
                  <li><a title="Afvalinzameling">Afvalinzameling</a></li>
                  <li class="tab-citydistricts"><a title="Wijken en buurten stadsdeel Zuid-West">Wijken en buurten stadsdeel Zuid-West</a></li>
                  <li><a title="Nieuws stadsdeel Zuid-West">Nieuws stadsdeel Zuid-West</a></li>
                  <li class="tab-governance"><a title="Projecten stadsdeel Zuid-West">Projecten stadsdeel Zuid-West</a></li>
                  <li><a title="Contact stadsdeel Zuid-West">Contact stadsdeel Zuid-West</a></li>
                  <li><a title="Beheer en onderhoud Zuid-West">Beheer en onderhoud Zuid-West</a></li>
                  <li><a title="Gebiedsvisies stadsdeel Zuid-West">Gebiedsvisies stadsdeel Zuid-West</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="tab-governance"><a title="Bestuur">Bestuur</a>
            <ul class="sub">
              <li><a title="Vergaderingen">Vergaderingen</a></li>
              <li><a title="Gemeentebestuur">Gemeentebestuur</a></li>
              <li><a title="Documenten">Documenten</a></li>
              <li><a title="Meedoen">Meedoen</a></li>
              <li><a title="Collegebesluiten">Collegebesluiten</a></li>
              <li><a title="Live vergaderingen">Live vergaderingen</a></li>
              <li class="last"><a title="Activiteitenlijst college">Activiteitenlijst college</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="content">
        <div class="wrapper">
          <div class="breadcrumbs">
            <ol class="breadcrumb">
              <li><a>Home<span aria-hidden="true" data-icon="1"></span></a></li>
              <li><a target="_self" title="Inwoners en ondernemers">Inwoners en ondernemers</a> <span aria-hidden="true" data-icon="1"></span></li>
              <li><a target="_self" title="Paspoort, rijbewijs en uittreksel">Paspoort, rijbewijs en uittreksel</a> <span aria-hidden="true" data-icon="1"></span></li>
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
          <a><img src="./assets/logo.png" class="logo" alt="Logo Gemeente Haarlem - Home" width="250" height="167"></a>
          <ul class="footerMenu">
            <li> <a title="Werken bij de gemeente"><span aria-hidden="true" data-icon="1"></span>Werken bij de gemeente</a> </li>
            <li> <a title="Contact"><span aria-hidden="true" data-icon="1"></span>Contact</a> </li>
            <li> <a title="Nieuws en actualiteiten"><span aria-hidden="true" data-icon="1"></span>Nieuws en actualiteiten</a> </li>
            <li> <a title="Sitemap"><span aria-hidden="true" data-icon="1"></span>Sitemap</a> </li>
            <li> <a title="Over deze website"><span aria-hidden="true" data-icon="1"></span>Over deze website</a> </li>
          </ul>
          <div class="social-links">
            <ul>
              <li>
                <a title="WhatsApp gegevens gemeente Haarlem">
    						<span class="icon-whatsapp" data-icon="" aria-hidden="true"></span><span class="visuallyhidden">WhatsApp gegevens gemeente Haarlem</span>
    					</a>
              </li>
              <li>
                <a title="Twitter profiel gemeente Haarlem">
    						<span class="icon-twitter" data-icon="A" aria-hidden="true"></span><span class="visuallyhidden">Twitter profiel gemeente Haarlem</span>
    					</a>
              </li>
              <li>
                <a title="Facebook pagina gemeente Haarlem">
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
