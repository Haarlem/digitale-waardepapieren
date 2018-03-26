<template>
<div id="app">
  <body>
    <div>
      <header class="header">
        <div class="wrapper">
          <div id="top" class="top">
            <a class="button-basic" id="button-menu">
    				<span aria-hidden="true"></span>
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
    				<span aria-hidden="true"></span>
    				Zoek
    			</a>
          </div>
          <ul class="top-links">
            <li class="top-link"><a title="Toeristische informatie" rel="external">Toeristische informatie<span class="screen-reader-text"> (externe website)</span><span aria-hidden="true"></span></a></li>
          </ul>
          <form id="tx-solr-search-form-pi-search" action="https://www.haarlem.nl/zoeken" class="search" method="get" accept-charset="utf-8">
            <fieldset>
              <legend class="screen-reader-text">Zoeken</legend>
              <div>
                <span aria-hidden="true"></span>
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
              </li>
              <li><a title="Parkeren, verkeer en vervoer">Parkeren, verkeer en vervoer</a>
              </li>
              <li><a title="Afval en milieu">Afval en milieu</a>
              </li>
              <li><a title="Geboorte, huwelijk en overlijden">Geboorte, huwelijk en overlijden</a>
              </li>
              <li class="last more"><a title="Meer onderwerpen...">Meer onderwerpen...<span aria-hidden="true"></span></a>
              </li>
            </ul>
          </li>
          <li class="tab-citydistricts"><a title="Stadsdelen">Stadsdelen</a>
          </li>
          <li class="tab-governance"><a title="Bestuur">Bestuur</a>
          </li>
        </ul>
      </nav>
      <div class="content">
        <div class="wrapper">
          <div class="breadcrumbs">
            <ol class="breadcrumb">
              <li><a>Home<span aria-hidden="true"></span></a></li>
              <li><a target="_self" title="Inwoners en ondernemers">Inwoners en ondernemers</a> <span aria-hidden="true"></span></li>
              <li><a target="_self" title="Paspoort, rijbewijs en uittreksel">Paspoort, rijbewijs en uittreksel</a> <span aria-hidden="true"></span></li>
              <li class="active">Uittreksel persoonsgegevens</li>
            </ol>
          </div>
        </div>
        <!-- This is where the app gets injected, before this it is all boilerplate -->

        <router-view></router-view>

        <!-- This ends where the app is injected, the rest is boilerplate -->
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
            <li> <a title="Werken bij de gemeente"><span aria-hidden="true"></span>Werken bij de gemeente</a> </li>
            <li> <a title="Contact"><span aria-hidden="true"></span>Contact</a> </li>
            <li> <a title="Nieuws en actualiteiten"><span aria-hidden="true"></span>Nieuws en actualiteiten</a> </li>
            <li> <a title="Sitemap"><span aria-hidden="true"></span>Sitemap</a> </li>
            <li> <a title="Over deze website"><span aria-hidden="true"></span>Over deze website</a> </li>
          </ul>
          <div class="social-links">
            <ul>
              <li>
                <a title="WhatsApp gegevens gemeente Haarlem">
    						<span class="icon-whatsapp" aria-hidden="true"></span><span class="visuallyhidden">WhatsApp gegevens gemeente Haarlem</span>
    					</a>
              </li>
              <li>
                <a title="Twitter profiel gemeente Haarlem">
    						<span class="icon-twitter" aria-hidden="true"></span><span class="visuallyhidden">Twitter profiel gemeente Haarlem</span>
    					</a>
              </li>
              <li>
                <a title="Facebook pagina gemeente Haarlem">
    						<span class="icon-facebook" aria-hidden="true"></span><span class="visuallyhidden">Facebook pagina gemeente Haarlem</span>
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
