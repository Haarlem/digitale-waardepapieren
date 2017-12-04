<template lang="html">
  <div id="content" class="CTID-99-_ eb-99-panel content">
      <div class="CTID-471-_ eb-471-panel service-form wrapper">
        <form class="remember_login" id="new_authentication" accept-charset="UTF-8" @submit.prevent="login()"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="Q7xjd4V8rvQTZRw4LS/vrbbkrkZF8ENKaRTvdr1MH50PdU0yaVLKs97Tf/b4XGNpW/OjGlUhIyFkZ7JAfZlFMA=="><header class="form__header"><div class="form__header__required-fields">Verplichte velden<span class="form__item__label__required">*</span></div></header>
          <fieldset class="form__item"><label class="form__item__label" for="authentication_type_account">Inlogmethode<span class="form__item__label__required">*</span></label><input class="form__item__field--box" data-required="true" type="radio" value="basis" checked="checked" name="authentication[type_account]" id="authentication_type_account_basis"><label class="form__item__box-label" for="authentication_type_account_basis">Ik wil inloggen met alleen gebruikersnaam en wachtwoord</label><input class="form__item__field--box" data-required="true" type="radio" value="midden" name="authentication[type_account]" id="authentication_type_account_midden"><label class="form__item__box-label" for="authentication_type_account_midden">Ik wil inloggen met een extra controle via sms</label><input class="form__item__field--box" data-required="true" type="radio" value="midden_via_app" name="authentication[type_account]" id="authentication_type_account_midden_via_app"><label class="form__item__box-label" for="authentication_type_account_midden_via_app">Ik wil inloggen met de DigiD app</label></fieldset>

          <div id="app_notice" class="block-with-icon--information" style="display: none;"><p>Let op! Deze inlogmethode is nieuw. Met de DigiD app kunt u eenvoudig en veilig inloggen. <a href="https://www.digid.nl/over-digid/app" target="_blank">Lees hoe u de DigiD app kunt installeren en activeren</a> [opent in een nieuw venster].</p></div>
          <div class="normal-login" id="normal-login">
          <fieldset class="form__item"><label class="form__item__label" for="authentication_digid_username">DigiD gebruikersnaam<span class="form__item__label__required">*</span></label><input autocapitalize="none" class="form__item__field" autocomplete="off" spellcheck="false" data-required="true" type="text" name="authentication[digid_username]" v-model="username" id="authentication_digid_username" data-cip-id="authentication_digid_username"></fieldset>
          <fieldset class="form__item" id="password-field"><label class="form__item__label" for="authentication_wachtwoord">Wachtwoord<span class="form__item__label__required">*</span></label><input class="form__item__field" autocomplete="off" data-required="true" type="password" name="authentication[wachtwoord]" id="authentication_wachtwoord" v-model="password" data-cip-id="authentication_wachtwoord"></fieldset>
          <fieldset class="form__item remember_option" style="display: block;"><input name="authentication[remember_login]" type="hidden" value="0"><input class="form__item__field--box" type="checkbox" value="1" name="authentication[remember_login]" id="authentication_remember_login"><label class="form__item__box-label" for="authentication_remember_login">Onthoud mijn DigiD gebruikersnaam</label></fieldset>
          </div>

          <div class="form__item"><p>U kunt tot 23:21 uur (Nederlandse tijd) inloggen. Daarna verloopt uw sessie.</p>
          </div><div class="actions"><input type="submit" name="commit" value="Inloggen" class="actions__left--button" id="submit-button" data-disable-with="Inloggen"><input type="submit" name="commit" value="Annuleren" class="actions__right--button" formnovalidate="formnovalidate" id="cancel-button" data-disable-with="Annuleren"></div>
        </form>
      </div>
  </div>
</template>

<script>
import Singleton from "@/utils/Singleton.js"

export default {
  methods: {
    login() {
      Singleton.user = {
        username: this.username,
        password: this.password
      }
      this.$router.push({ name: 'Claim' })
    }
  },
  mounted() {
    alert(`Het DigiD loginpaneel is slechts een demo. Log hier niet in met je echte wachtwoord, maar verzin in plaats daarvan een naam en wachtwoord. Gegevens worden nergens opgeslagen buiten lokale data voor demo-doeleinden`)
  },
  data() {
    return {
      username: '',
      password: ''
    }
  }
}
</script>

<style lang="css" scoped>
/*!
 * jQuery UI Dialog 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/#theming
 */

.ui-dialog {
  position: absolute;
  top: 0;
  left: 0;
  padding: .2em;
  outline: 0
}

.ui-dialog .ui-dialog-titlebar {
  padding: .4em 1em;
  position: relative
}

.ui-dialog .ui-dialog-title {
  float: left;
  margin: .1em 0;
  white-space: nowrap;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis
}

.ui-dialog .ui-dialog-titlebar-close {
  position: absolute;
  right: .3em;
  top: 50%;
  width: 20px;
  margin: -10px 0 0 0;
  padding: 1px;
  height: 20px
}

.ui-dialog .ui-dialog-content {
  position: relative;
  border: 0;
  padding: .5em 1em;
  background: none;
  overflow: auto
}

.ui-dialog .ui-dialog-buttonpane {
  text-align: left;
  border-width: 1px 0 0 0;
  background-image: none;
  margin-top: .5em;
  padding: .3em 1em .5em .4em
}

.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset {
  float: right
}

.ui-dialog .ui-dialog-buttonpane button {
  margin: .5em .4em .5em 0;
  cursor: pointer
}

.ui-dialog .ui-resizable-n {
  height: 2px;
  top: 0
}

.ui-dialog .ui-resizable-e {
  width: 2px;
  right: 0
}

.ui-dialog .ui-resizable-s {
  height: 2px;
  bottom: 0
}

.ui-dialog .ui-resizable-w {
  width: 2px;
  left: 0
}

.ui-dialog .ui-resizable-se, .ui-dialog .ui-resizable-sw, .ui-dialog .ui-resizable-ne, .ui-dialog .ui-resizable-nw {
  width: 7px;
  height: 7px
}

.ui-dialog .ui-resizable-se {
  right: 0;
  bottom: 0
}

.ui-dialog .ui-resizable-sw {
  left: 0;
  bottom: 0
}

.ui-dialog .ui-resizable-ne {
  right: 0;
  top: 0
}

.ui-dialog .ui-resizable-nw {
  left: 0;
  top: 0
}

.ui-draggable .ui-dialog-titlebar {
  cursor: move
}

html {
  line-height: 1
}

ol, ul {
  list-style: none
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

caption, th, td {
  text-align: left;
  font-weight: normal;
  vertical-align: middle
}

q, blockquote {
  quotes: none
}

q:before, q:after, blockquote:before, blockquote:after {
  content: "";
  content: none
}

a img {
  border: none
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
  display: block
}

.my_digid_edit_settings {
  margin-bottom: 20px
}

@media screen and (max-width: 519px) {
  .my_digid_edit_settings {
    display: none
  }
}

.info-box {
  background: #f6d4b2;
  position: relative
}

.info-box p {
  padding-right: 30px
}

.info-box:after {
  border: solid transparent;
  border-color: rgba(246, 212, 178, 0) rgba(246, 212, 178, 0) #f6d4b2;
  border-width: 4px;
  bottom: 100%;
  content: ' ';
  height: 0;
  margin-left: -4px;
  pointer-events: none;
  position: absolute;
  right: 16px;
  width: 0
}

.wrap-main {
  float: left
}

@media screen and (min-width: 520px) {
  .wrap-main {
    width: 480px
  }
}

@media screen and (max-width: 519px) {
  .wrap-main {
    width: 100%
  }
}

.wrap-main.extended-height {
  display: table-cell;
  float: none;
  vertical-align: top
}

.wrap-main.yellow-highlight {
  background-color: #fdf6bb
}

.row {
  overflow: hidden;
  *zoom: 1;
  margin-bottom: 10px
}

.row.extended-height {
  display: table
}

@media screen and (min-width: 520px) {
  .row {
    width: 720px
  }
}

.row:after {
  clear: both;
  content: ''
}

.col {
  display: block;
  float: left
}

@media screen and (max-width: 519px) {
  .col {
    clear: both;
    float: none
  }
}

.no-highlight {
  overflow: hidden;
  *zoom: 1;
  padding: 5px 10px
}

.highlight {
  overflow: hidden;
  *zoom: 1;
  padding: 5px 10px;
  background-color: #F5F5F5
}

.highlight.notice {
  background-color: #fdf6bb
}

.col-name {
  margin-bottom: 5px;
  margin-right: 5px;
  margin-top: 5px;
  word-wrap: break-word
}

@media screen and (min-width: 520px) {
  .col-name {
    width: 175px
  }
}

@media screen and (max-width: 519px) {
  .col-name {
    width: 100%
  }
}

.col-val {
  font-weight: bold;
  margin-top: 5px;
  vertical-align: middle
}

@media screen and (min-width: 520px) {
  .col-val {
    width: 280px
  }
}

.col-val p {
  overflow: hidden
}

.col-val .info-button {
  background-color: #dcdcdc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 12px 12px;
  border: 0;
  cursor: pointer;
  float: right;
  height: 30px;
  margin-left: 5px;
  margin-right: -5px;
  margin-top: -5px;
  width: 30px
}

.col-val .info-button:hover {
  background-color: #bcbcbc
}

.col-val .info-button.info {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAVFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU4H24AAAAG3RSTlMAAQMEBQcMEhQYGSorLj1Pd36DlJumtLnk9/2fmLnWAAAAcElEQVQ4y2NgQALMLCDAyIALiEqDgQQrDnkWaSjgIaSAl2YKmGEKuHH5QkAKLC/OxDBYAb8kzBM4HAmXx+VNhDyOgCKoQIKQAi5BYdrH5nBQwIkIKDEhPvxBDQRseCMLCDjIUCCJooAdX5IDAhGEOABapR0l+sq09QAAAABJRU5ErkJggg==)
}

.col-val .info-button.close {
  background-color: #f6d4b2;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAn1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3kz5EAAAANHRSTlMAAQIEBQkLDA0REhMUFhgaHB8hIyYnMTRVWWdpa2xzgoWRlZqgqrfF0+Di5uvv8fX3+fv9i0OV1AAAANdJREFUOI190VcSgzAMRVFBeu+990JIfftfWyAQRxIm/pPPHYaRicIzOu2rJE5u680dMy0B3JvcC+fgaucwl8XHTRE5L2KPiymgCuPAhsgFVMEcKJIDVQhHnmgoC+mL8JMTUXh8WkU/JQqLpxbGUwrm1kK4pVCeKBJOxacI2trlfoBb47/rIumysDkv7P4r0vxb5IWvZ6KoB8FBuCM35rmUUa52WiY6KheF7xKVfOWseHXCseIrN8WrG43Vq/K4+HpQXIL35U40Bh6935jtt/Tz1gY5fWU/b2OHeDs8LMM+AAAAAElFTkSuQmCC);
  background-size: 12px 12px
}

@media screen and (max-width: 519px) {
  .col-val .info-button {
    margin-top: -20px
  }
}

.col-links {
  float: right;
  padding-top: 12px;
  vertical-align: middle;
  width: 220px
}

.col-links.extended-height {
  display: table-cell;
  padding-top: 0
}

.col-links ul {
  margin-bottom: 0;
  margin-top: 0
}

.col-links:hover {
  background-color: #fff
}

@media screen and (max-width: 689px) {
  .col-links {
    clear: both;
    float: none;
    padding-top: 10px
  }
}

.col-info {
  background-color: #f6d4b2;
  display: block;
  margin: 10px 0 0;
  padding: 10px
}

.javascript .col-info {
  display: none
}

@media screen and (min-width: 520px) {
  .col-info {
    width: 460px
  }
}

#app_notice.block-with-icon--information, #app_disabled.block-with-icon--error, #cardreader_disabled.block-with-icon--error {
  margin-bottom: 5px
}

.cardreader-login img {
  padding-left: 50px;
  padding-right: 30px;
  vertical-align: middle
}

.cardreader-login .block-with-icon--information {
  margin-bottom: 5px
}

.qr_container {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  margin-top: 10px
}

.qr_container .actions--link {
  line-height: 16px;
  padding: .4em
}

.qr_label {
  text-align: center
}

.qr_option {
  text-align: center;
  width: 40%
}

.qr_option .icon {
  cursor: pointer;
  display: block;
  margin: 0 auto 5px
}

.qr_option:first-child {
  padding-right: 10px
}

.qr_option a, .qr_option span {
  display: inline-block
}

.qr_option a .subtxt, .qr_option span .subtxt {
  font-size: 10px;
  font-weight: normal;
  min-height: 32px
}

.qr_switch.link {
  color: #0162cd;
  cursor: pointer;
  text-decoration: underline
}

.form__header--appcode, .form__header--mail, .form__header--sms, .form__header {
  overflow: hidden;
  *zoom: 1;
  margin-top: 20px;
  min-height: 30px
}

.form__header--appcode, .form__header--mail, .form__header--sms {
  background-position: top left;
  background-repeat: no-repeat;
  padding-left: 30px
}

.form__header--appcode {
  background-image: url(/assets/icon-smartphone-1b19c76cc2952b6217787bf3ba609d59acb7a0c28b09a481c62c55d68e139e05.png)
}

.form__header--mail {
  background-image: url(/assets/icon-mail-8da0b45422c7d923592fd89cee83f09ea031e68f25790c90d81733ce84497ce0.png)
}

.form__header--sms {
  background-image: url(/assets/icon-sms-8abeb9a4918d0e0d1cbb5affbd1d4b94214cac67ff77ba250884cd112178705d.png)
}

.form__header__required-fields {
  float: right;
  margin-bottom: 10px;
  margin-top: 1px
}

.form__item, .form__item--error {
  margin-bottom: 5px;
  padding: 5px 10px;
  position: relative
}

.form__item {
  background-color: #f5f5f5
}

.form__item--active.form__item {
  background-color: #dcdcdc
}

.form__item--active.form__item--error {
  background-color: #ea9790
}

.form__item--error {
  background-color: #f2bfbb
}

.form__item__box-label {
  display: block;
  margin-left: 30px;
  padding-top: 3px;
  position: relative
}

.form__item__errors {
  background-image: url(/assets/message_err-d403d06effcd5a02c2ea1a7e7affe4fc93f4618526a46f70bc37a7e71c992567.png);
  background-position: 0 5px;
  background-repeat: no-repeat;
  min-height: 20px;
  padding: 5px;
  padding-left: 30px;
  width: 75%
}

.form__item__example {
  color: #5a5a5a;
  display: inline-block;
  margin-top: 5px
}

.form__item__field, .form__item__field--extra-small, .form__item__field--medium, .form__item__field--small {
  border-color: #000;
  border-style: solid;
  border-width: 1px;
  font-family: Verdana, Arial, sans-serif;
  font-size: 12px;
  margin-right: 8px;
  max-width: 333px;
  padding: 5px 10px
}

[data-code].form__item__field, [data-code].form__item__field--extra-small, [data-code].form__item__field--medium, [data-code].form__item__field--small, [data-capitals].form__item__field, [data-capitals].form__item__field--extra-small, [data-capitals].form__item__field--medium, [data-capitals].form__item__field--small {
  text-transform: uppercase
}

.form__item--error .form__item__field, .form__item--error .form__item__field--extra-small, .form__item--error .form__item__field--medium, .form__item--error .form__item__field--small {
  border-color: #960000
}

.form__item__field {
  width: 91%
}

.form__item__field--box {
  margin-top: 5px;
  position: absolute
}

.form__item__field--extra-small {
  width: 20px
}

.form__item__field--medium {
  max-width: 158px;
  width: 91%
}

.form__item__field--small {
  width: 66px
}

.form__item__information {
  -moz-transition: left 0.2s linear;
  -o-transition: left 0.2s linear;
  -webkit-transition: left 0.2s linear;
  transition: left 0.2s linear;
  background-color: #fce559;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  left: 74%;
  margin: 15px 0 5px -30px;
  padding: 10px 15px;
  position: absolute;
  top: -20px;
  visibility: hidden;
  width: 210px;
  z-index: 10
}

@media screen and (min-width: 1px) {
  .form__item__information {
    margin-left: 0
  }
}

@media screen and (max-width: 767px) {
  .form__item__information {
    display: none;
    left: auto;
    position: relative;
    top: auto;
    visibility: visible;
    width: auto
  }
}

@media screen and (min-width: 1px) {
  .form__item__information:before {
    border-color: transparent;
    border-right-color: #fce559;
    border-style: solid;
    border-width: 15px;
    content: '';
    height: 0;
    left: -30px;
    position: absolute;
    top: 30px;
    width: 0
  }
}

@media screen and (min-width: 1px) and (max-width: 767px) {
  .form__item__information:before {
    border-bottom-color: #fce559;
    border-right-color: transparent;
    left: 30px;
    right: auto;
    top: -30px
  }
}

.form__item__field:focus~.form__item__information, .form__item__field--box:focus~.form__item__information, .form__item__field--extra-small:focus~.form__item__information, .form__item__field--medium:focus~.form__item__information, .form__item__field--small:focus~.form__item__information {
  left: 77%;
  visibility: visible
}

@media screen and (max-width: 767px) {
  .form__item__field:focus~.form__item__information, .form__item__field--box:focus~.form__item__information, .form__item__field--extra-small:focus~.form__item__information, .form__item__field--medium:focus~.form__item__information, .form__item__field--small:focus~.form__item__information {
    display: block;
    left: auto
  }
}

input[type='radio']~.form__item__information {
  left: 94%
}

@media screen and (min-width: 1px) {
  input[type='radio']~.form__item__information {
    margin-left: 0
  }
}

@media screen and (max-width: 979px) {
  input[type='radio']~.form__item__information {
    display: none;
    left: auto;
    position: relative;
    top: auto;
    visibility: visible;
    width: auto
  }
}

@media screen and (max-width: 979px) {
  input[type='radio']~.form__item__information:before {
    border-bottom-color: #fce559;
    border-right-color: transparent;
    left: 30px;
    right: auto;
    top: -30px
  }
}

input[type='radio'].form__item__field:checked~.form__item__information, input[type='radio'].form__item__field--box:checked~.form__item__information, input[type='radio'].form__item__field--extra-small:checked~.form__item__information, input[type='radio'].form__item__field--medium:checked~.form__item__information, input[type='radio'].form__item__field--small:checked~.form__item__information {
  left: 97%;
  visibility: visible
}

@media screen and (max-width: 979px) {
  input[type='radio'].form__item__field:checked~.form__item__information, input[type='radio'].form__item__field--box:checked~.form__item__information, input[type='radio'].form__item__field--extra-small:checked~.form__item__information, input[type='radio'].form__item__field--medium:checked~.form__item__information, input[type='radio'].form__item__field--small:checked~.form__item__information {
    display: block;
    left: auto
  }
}

.form__item__label {
  display: block;
  font-weight: bold;
  margin-bottom: 3px
}

.form__item--error .form__item__label {
  color: #960000
}

.form__item__label__required {
  margin-left: 5px
}

.form__item__hint {
  margin-top: 15px
}

.footer {
  background-color: #154273;
  height: 25px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8px;
  text-align: center;
  width: 44px
}

.pageid-footer {
  background-color: #e6e6e6;
  border-top: 3px solid #4e4e4e;
  color: #535353;
  display: table;
  height: 58px;
  width: 100%
}

.pageid-footer .pageid-inner {
  display: table-row
}

@media screen and (max-width: 767px) {
  .pageid-footer .pageid-inner {
    display: block;
    margin-top: 20px
  }
}

.pageid-footer .pageid-left, .pageid-footer .pageid-center, .pageid-footer .pageid-right {
  display: table-cell;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 20px;
  width: 33.33333%
}

@media screen and (max-width: 767px) {
  .pageid-footer .pageid-left, .pageid-footer .pageid-center, .pageid-footer .pageid-right {
    display: block;
    padding-right: inherit;
    padding-top: inherit;
    width: inherit
  }
  .pageid-footer .pageid-left p, .pageid-footer .pageid-center p, .pageid-footer .pageid-right p {
    margin-top: 5px
  }
}

.pageid-footer p+p {
  margin-top: 5px
}

.poller {
  display: none
}

.remember_login .remember_option {
  display: none
}

*[hidden] {
  display: none
}

a {
  color: #154273
}

a:hover {
  color: #0162cd;
  text-decoration: underline
}

a:visited {
  color: #696969
}

a[target="_blank"] {
  background-image: url(/assets/icon-external-3402c4223c0e9914b2fa57654035595b5f863d2f96d9c4996506418cbd908c1d.png);
  background-position: 0 4px;
  background-repeat: no-repeat;
  padding-left: 10px
}

body {
  background-color: #f3f5f6;
  font-family: Verdana, Arial, sans-serif;
  font-size: 12px;
  line-height: 1.5em
}

.break-all {
  word-break: break-all
}

h1 {
  font-family: Arial;
  font-size: 22px;
  line-height: 1.5em;
  margin-bottom: 20px
}

@media screen and (max-width: 767px) {
  :not(.my-digid-index) h1:not(.h2) {
    background-image: url(/assets/digid_eo_rgb_35px-83ea82752f2fd816ce666b3c194df743643be237949eeef95ac6d4e3ebe760ef.png);
    background-position: left top;
    background-repeat: no-repeat;
    font-size: 18px;
    min-height: 25px;
    padding: 10px 0 0 45px
  }
}

@media screen and (max-width: 859px) {
  .my-digid-index h1:not(.h2) {
    background-image: url(/assets/digid_eo_rgb_35px-83ea82752f2fd816ce666b3c194df743643be237949eeef95ac6d4e3ebe760ef.png);
    background-position: left top;
    background-repeat: no-repeat;
    font-size: 18px;
    min-height: 25px;
    padding: 10px 0 0 45px
  }
}

h2 {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px
}

input {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0
}

@media screen and (max-width: 767px) {
  .header-menu li {
    border-top-color: #fbead9;
    border-top-style: solid;
    border-top-width: 1px;
    text-align: left
  }
}

.list-with-arrows li {
  background: url(/assets/arrows-40ff96dbe201d724370c00542b6b18630a06840991b7860e5ce9d15bb3cede21.png) no-repeat scroll left 5px transparent;
  padding-left: 10px
}

form>p {
  margin-bottom: 20px
}

p+p {
  margin-top: 10px
}

.setting-active+p, .setting-inactive+p {
  margin-top: 0
}

small {
  font-size: 11px
}

h1 small {
  font-size: 14px
}

@media screen and (max-width: 519px) {
  h1 small {
    display: none
  }
}

strong {
  font-weight: bold
}

ul {
  margin-bottom: 20px;
  margin-top: 10px
}

ul+p {
  margin-top: 10px
}

@media screen and (max-width: 767px) {
  .header-menu ul {
    overflow: hidden;
    *zoom: 1;
    clear: both;
    display: none
  }
}

.header-menu--active ul {
  display: block
}

.accessibility__information {
  height: 0;
  overflow: hidden;
  width: 0
}

.actions {
  overflow: hidden;
  *zoom: 1;
  padding-bottom: 5px;
  padding-top: 5px
}

form .actions {
  padding-left: 10px;
  padding-right: 10px
}

.actions--link, .actions__left--button, .actions__left--link {
  float: left;
  background-color: #deebe3;
  border: 1px solid #000;
  font-weight: bold;
  padding: .4em 1em
}

.actions--link:hover, .actions__left--button:hover, .actions__left--link:hover, .actions--link:active, .actions__left--button:active, .actions__left--link:active {
  background-color: #828282;
  color: #fbfbfb
}

.actions__middle--button {
  background-color: #deebe3;
  border: 1px solid #000;
  font-weight: bold;
  padding: .4em 1em
}

.actions__middle--button:hover, .actions__middle--button:active {
  background-color: #828282;
  color: #fbfbfb
}

.actions__middle--button {
  cursor: pointer;
  text-decoration: none
}

.actions--link {
  color: #000;
  cursor: pointer;
  float: none;
  text-decoration: none
}

.actions--link:visited {
  color: #000
}

.actions--link:hover, .actions--link:active {
  color: #fbfbfb;
  text-decoration: none
}

.actions__left--button {
  cursor: pointer
}

.actions__left--link {
  color: #000;
  text-decoration: none
}

.actions__left--link:visited {
  color: #000
}

.actions__left--link:hover, .actions__left--link:active {
  color: #fbfbfb;
  text-decoration: none
}

.actions__right--button, .actions__right--link {
  float: right;
  color: #154273;
  padding-top: 7px
}

.actions__right--button:active, .actions__right--link:active, .actions__right--button:hover, .actions__right--link:hover {
  color: #154273
}

.actions__right--button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  text-decoration: underline
}

.actions__right--link:visited {
  color: #154273
}

.block-with-icon--error {
  background-color: #f2bfbb;
  background-image: url(/assets/message_err-d403d06effcd5a02c2ea1a7e7affe4fc93f4618526a46f70bc37a7e71c992567.png);
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 10px;
  padding-left: 40px;
  margin-bottom: 20px
}

.block-with-icon--error>h2 {
  margin-bottom: 4px
}

.block-with-icon--information {
  background-color: #fdf6bb;
  background-image: url(/assets/message_info-a9d4995c7fe4f7dc32ca08cbed1f84ea5ee790dd3ae372e727db7ae0b5fb209c.png);
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 10px;
  padding-left: 40px;
  margin-bottom: 20px
}

.block-with-icon--information>h2 {
  margin-bottom: 4px
}

.block-with-icon--information strong {
  word-wrap: break-word
}

.block-with-icon--waiting {
  background-color: #fdf6bb;
  background-image: url(/assets/loader-f6ecff617ec2ba7f559e6f535cad9b70a3f91120737535dab4d4548a6c83576c.gif);
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 10px;
  padding-left: 40px;
  margin-bottom: 20px
}

.block-with-icon--waiting>h2 {
  margin-bottom: 4px
}

.compact-paragraph {
  margin-top: 0
}

.content {
  background-color: #fff;
  margin: 25px auto;
  position: relative
}

.digid-logo {
  float: left;
  padding-left: 10px;
  width: 100px
}

@media screen and (max-width: 767px) {
  :not(.my-digid-index) .digid-logo {
    display: none
  }
}

@media screen and (max-width: 859px) {
  .my-digid-index .digid-logo {
    display: none
  }
}

.footer-questions {
  margin-top: 50px
}

.h2 {
  font-family: Verdana, Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px
}

.header {
  border-bottom-color: #f6d4b2;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  text-align: center
}

.header-menu {
  overflow: hidden;
  *zoom: 1;
  background-color: #e17000;
  height: 30px;
  min-height: 25px;
  padding-left: 20px;
  padding-right: 10px;
  padding-top: 20px
}

@media screen and (max-width: 767px) {
  .header-menu {
    height: auto;
    padding-top: 0
  }
}

.header-menu-link {
  color: #000;
  float: left;
  font-family: Verdana, Arial, sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 32px;
  padding-left: 15px;
  padding-right: 15px;
  text-decoration: none
}

.header-menu-link:hover, .header-menu-link:active {
  background-color: #f6d4b2;
  color: #000;
  text-decoration: none
}

.header-menu-link:visited {
  color: #000
}

@media screen and (max-width: 767px) {
  .header-menu-link {
    color: #fff;
    float: none;
    font-weight: normal;
    padding: 0
  }
  .header-menu-link:visited {
    color: #fff
  }
  .header-menu-link:hover, .header-menu-link:active {
    background-color: transparent;
    color: #000
  }
}

.header-menu-link--active {
  background-color: #f6d4b2;
  font-weight: bold
}

@media screen and (max-width: 767px) {
  .header-menu-link--active {
    background-color: transparent
  }
}

.header-menu-link--expand {
  background-color: #f6d4b2;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZjRiOTE0Ny04MTNhLTQyYmUtYmY4Yi1kNDEwZDRlNTNhOTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkQxOEM4NzkxNTYyMTFFNDgyOTI4MzMyQjVDM0ZERDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkQxOEM4NzgxNTYyMTFFNDgyOTI4MzMyQjVDM0ZERDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ZjRiOTE0Ny04MTNhLTQyYmUtYmY4Yi1kNDEwZDRlNTNhOTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGY0YjkxNDctODEzYS00MmJlLWJmOGItZDQxMGQ0ZTUzYTkxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NBmcTAAAACFJREFUeNpiZGBg+M9ABGBiIBIw/v9PlIEkmDgi3QgQYACUVAkHeBoXRQAAAABJRU5ErkJggg==");
  background-position: 6px 7px;
  background-repeat: no-repeat;
  display: none;
  font-weight: initial;
  height: 23px;
  line-height: 23px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 22px;
  padding-right: 5px;
  text-transform: capitalize
}

@media screen and (max-width: 767px) {
  .header-menu-link--expand {
    float: left;
    color: #000;
    display: block
  }
  .header-menu-link--expand:hover, .header-menu-link--expand:active {
    background-color: #f6d4b2
  }
  .header-menu-link--expand:visited {
    color: #000
  }
}

.header-navigation {
  background-color: #fbead9;
  font-family: Arial;
  font-size: 1.6em;
  font-weight: bold;
  line-height: 1.5em;
  padding-left: 19px;
  text-align: left
}

@media screen and (max-width: 767px) {
  .header-navigation {
    font-size: 1.2em
  }
}

.header-navigation-logout-link {
  color: #000;
  float: right;
  font-family: Verdana, Arial, sans-serif;
  font-size: 12px;
  font-weight: normal;
  margin-right: 10px;
  text-decoration: none
}

.navigation {
  margin-top: 0
}

.heading-with-separator {
  border-bottom-color: #e17000;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  padding-bottom: 5px;
  padding-top: 16px
}

.javascript .hidden-for-javascript {
  display: none
}

.letter {
  display: block;
  margin: 30px auto
}

form+.list-with-arrows {
  margin-top: 10px
}

.list-with-blocks {
  list-style-type: square;
  margin-bottom: 2.2em;
  margin-left: 2.4em
}

.header-list-with-blocks {
  list-style-type: square;
  margin-left: 2.4em
}

.test-betrouwbaarheidsniveau-list {
  list-style-type: decimal
}

.form__item #authentication_type_account_test {
  margin-top: 25px
}

.form__item label[for='authentication_type_account_test'] {
  margin-top: 20px
}

.loader {
  background: url(/assets/ajaxLoader-f6ecff617ec2ba7f559e6f535cad9b70a3f91120737535dab4d4548a6c83576c.gif);
  display: block;
  height: 16px;
  margin: 0 auto;
  width: 16px
}

.non-spinning .loader {
  background: url(/assets/loader-91b1a7d14431d4a79990c0e6b2c19afb58d88c90870aa8cd56498d0d15ed5244.png)
}

.main {
  overflow: hidden;
  *zoom: 1;
  padding: 40px 10px;
  position: relative
}

@media screen and (max-width: 767px) {
  .main {
    padding-top: 10px
  }
}

.main-content {
  margin: 0 auto;
  max-width: 480px
}

@media screen and (min-width: 750px) and (max-width: 979px) {
  .my-digid-index .main-content {
    margin-left: auto;
    margin-right: 230px
  }
}

@media screen and (min-width: 690px) and (max-width: 749px) {
  .my-digid-index .main-content {
    margin-left: auto;
    margin-right: 170px
  }
}

.pagination {
  margin-bottom: 20px
}

.password-rules {
  margin-top: 10px
}

.password-rule--invalid, .password-rule--valid {
  background-image: url(/assets/password-8128870271cbf4b89c40236c2b7e8c58248c713bd37bf1a9ecfcfc311b26f933.png);
  background-repeat: no-repeat;
  font-weight: bold;
  height: 16px;
  line-height: 16px;
  padding-left: 20px
}

.password-rule--invalid {
  background-position: -16px 0
}

.password-rule--valid {
  background-position: 0 -16px;
  color: #2e742e
}

.questions {
  border-color: #ddd;
  border-style: solid;
  border-top: 0;
  border-width: 1px;
  font-size: 11px;
  margin-bottom: 20px
}

.questions-answer {
  padding: 10px 20px
}

.javascript .questions-answer {
  display: none
}

.questions-item {
  border-top-color: #ddd;
  border-top-style: solid;
  border-top-width: 1px
}

.questions-question {
  background-color: #f5f5f5;
  background-image: url(/assets/arrows-40ff96dbe201d724370c00542b6b18630a06840991b7860e5ce9d15bb3cede21.png);
  background-position: 5px 10px;
  background-repeat: no-repeat;
  color: #000;
  display: block;
  font-weight: bold;
  padding: 5px;
  padding-left: 18px;
  text-decoration: none
}

.questions-question:hover, .questions-question:visited {
  color: #000;
  text-decoration: none
}

.rijksoverheid-logo {
  margin-bottom: 3px
}

.screen-reader {
  height: 1px;
  left: -9999px;
  overflow: hidden;
  position: absolute;
  top: auto;
  width: 1px
}

.service-menu {
  position: absolute;
  right: 10px;
  top: 5px
}

.service-menu-items {
  margin: 0;
  padding: 0;
  border: 0;
  overflow: hidden;
  *zoom: 1
}

.service-menu-items li {
  list-style-image: none;
  list-style-type: none;
  margin-left: 0;
  display: inline-block;
  vertical-align: middle;
  *vertical-align: auto;
  *zoom: 1;
  *display: inline;
  white-space: nowrap;
  padding-left: 10px;
  padding-right: 10px
}

.service-menu-link {
  color: #535353
}

.service-menu-link:link {
  text-decoration: none
}

.setting-active {
  color: #2e742e;
  font-weight: bold
}

.setting-inactive {
  color: #bb4c4c;
  font-weight: bold
}

.secure-active {
  margin-left: 100px
}

.secure-level-lock {
  background-image: url(/assets/slotje-31205252b2fe7f07a5b68c90ff05bc1570fab704fdaf8215d46a935fbacae5a9.png);
  background-size: 20px;
  float: left;
  height: 20px;
  width: 20px
}

.secure-level-lock--inline {
  display: inline-block;
  background-image: url(/assets/slotje-31205252b2fe7f07a5b68c90ff05bc1570fab704fdaf8215d46a935fbacae5a9.png);
  background-size: 12px;
  background-position-y: 1px;
  background-repeat-y: no-repeat;
  height: 12px;
  float: none
}

.secure-level-lock--inline.l10 {
  width: 12px
}

.secure-level-lock--inline.l20 {
  width: 24px
}

.secure-level-lock--inline.l25 {
  width: 36px
}

.secure-level-lock--inline.l30 {
  width: 48px
}

.secure-level-lock--inline:before {
  content: " "
}

.steps {
  display: table;
  margin-bottom: 20px;
  width: 100%
}

.step-current, .step-current-last, .step-finished, .step-previous, .step-unfinished, .step-unfinished-last {
  background-color: #f8f8f9;
  display: table-cell;
  height: 22px;
  line-height: 22px;
  padding-left: 10px;
  padding-right: 20px;
  text-align: center;
  white-space: nowrap
}

.step-current, .step-finished, .step-previous, .step-unfinished {
  background-image: url(/assets/sprite-forms-staps-b28458223c104e3e60eb6df6a301b451655202a7ff5e4f7d355acb44b22bf1b4.png);
  background-repeat: no-repeat
}

.step-current, .step-current-last {
  background-color: #fada3c;
  background-position: right -48px;
  font-weight: bold
}

.step-finished, .step-previous {
  background-color: #fbf1cb
}

.step-finished {
  background-position: right 0
}

.step-previous {
  background-position: right -24px
}

.step-unfinished, .step-unfinished-last {
  background-position: right -72px
}

@media (max-width: 450px) {
  .step-title {
    display: none
  }
}

.table, .table--shades {
  overflow: hidden;
  *zoom: 1;
  display: table;
  margin-bottom: 20px
}

@media screen and (max-width: 519px) {
  .table, .table--shades {
    display: block
  }
}

.table .caption {
  display: none
}

p+.table--shades {
  margin-top: 20px
}

.table-cell, .table-cell--heading, .table-cell--history-date, .table-cell--setting-description, .table-cell--setting-links, .table-cell--overview-links, .table-cell--overview, .table-cell--setting-overview {
  border-bottom: 3px solid #fff;
  display: table-cell;
  padding: 5px 10px
}

.table-cell+.table-cell, .table-cell--heading+.table-cell, .table-cell--history-date+.table-cell, .table-cell--setting-description+.table-cell, .table-cell--setting-links+.table-cell, .table-cell--overview-links+.table-cell, .table-cell--overview+.table-cell, .table-cell--setting-overview+.table-cell, .table-cell+.table-cell--heading, .table-cell--heading+.table-cell--heading, .table-cell--history-date+.table-cell--heading, .table-cell--setting-description+.table-cell--heading, .table-cell--setting-links+.table-cell--heading, .table-cell--overview-links+.table-cell--heading, .table-cell--overview+.table-cell--heading, .table-cell--setting-overview+.table-cell--heading, .table-cell+.table-cell--history-date, .table-cell--heading+.table-cell--history-date, .table-cell--history-date+.table-cell--history-date, .table-cell--setting-description+.table-cell--history-date, .table-cell--setting-links+.table-cell--history-date, .table-cell--overview-links+.table-cell--history-date, .table-cell--overview+.table-cell--history-date, .table-cell--setting-overview+.table-cell--history-date, .table-cell+.table-cell--setting-description, .table-cell--heading+.table-cell--setting-description, .table-cell--history-date+.table-cell--setting-description, .table-cell--setting-description+.table-cell--setting-description, .table-cell--setting-links+.table-cell--setting-description, .table-cell--overview-links+.table-cell--setting-description, .table-cell--overview+.table-cell--setting-description, .table-cell--setting-overview+.table-cell--setting-description, .table-cell+.table-cell--setting-links, .table-cell--heading+.table-cell--setting-links, .table-cell--history-date+.table-cell--setting-links, .table-cell--setting-description+.table-cell--setting-links, .table-cell--setting-links+.table-cell--setting-links, .table-cell--overview-links+.table-cell--setting-links, .table-cell--overview+.table-cell--setting-links, .table-cell--setting-overview+.table-cell--setting-links, .table-cell+.table-cell--overview-links, .table-cell--heading+.table-cell--overview-links, .table-cell--history-date+.table-cell--overview-links, .table-cell--setting-description+.table-cell--overview-links, .table-cell--setting-links+.table-cell--overview-links, .table-cell--overview-links+.table-cell--overview-links, .table-cell--overview+.table-cell--overview-links, .table-cell--setting-overview+.table-cell--overview-links, .table-cell+.table-cell--overview, .table-cell--heading+.table-cell--overview, .table-cell--history-date+.table-cell--overview, .table-cell--setting-description+.table-cell--overview, .table-cell--setting-links+.table-cell--overview, .table-cell--overview-links+.table-cell--overview, .table-cell--overview+.table-cell--overview, .table-cell--setting-overview+.table-cell--overview, .table-cell+.table-cell--setting-overview, .table-cell--heading+.table-cell--setting-overview, .table-cell--history-date+.table-cell--setting-overview, .table-cell--setting-description+.table-cell--setting-overview, .table-cell--setting-links+.table-cell--setting-overview, .table-cell--overview-links+.table-cell--setting-overview, .table-cell--overview+.table-cell--setting-overview, .table-cell--setting-overview+.table-cell--setting-overview {
  border-left: 3px solid #fff
}

@media screen and (max-width: 519px) {
  .table-cell+.table-cell, .table-cell--heading+.table-cell, .table-cell--history-date+.table-cell, .table-cell--setting-description+.table-cell, .table-cell--setting-links+.table-cell, .table-cell--overview-links+.table-cell, .table-cell--overview+.table-cell, .table-cell--setting-overview+.table-cell, .table-cell+.table-cell--heading, .table-cell--heading+.table-cell--heading, .table-cell--history-date+.table-cell--heading, .table-cell--setting-description+.table-cell--heading, .table-cell--setting-links+.table-cell--heading, .table-cell--overview-links+.table-cell--heading, .table-cell--overview+.table-cell--heading, .table-cell--setting-overview+.table-cell--heading, .table-cell+.table-cell--history-date, .table-cell--heading+.table-cell--history-date, .table-cell--history-date+.table-cell--history-date, .table-cell--setting-description+.table-cell--history-date, .table-cell--setting-links+.table-cell--history-date, .table-cell--overview-links+.table-cell--history-date, .table-cell--overview+.table-cell--history-date, .table-cell--setting-overview+.table-cell--history-date, .table-cell+.table-cell--setting-description, .table-cell--heading+.table-cell--setting-description, .table-cell--history-date+.table-cell--setting-description, .table-cell--setting-description+.table-cell--setting-description, .table-cell--setting-links+.table-cell--setting-description, .table-cell--overview-links+.table-cell--setting-description, .table-cell--overview+.table-cell--setting-description, .table-cell--setting-overview+.table-cell--setting-description, .table-cell+.table-cell--setting-links, .table-cell--heading+.table-cell--setting-links, .table-cell--history-date+.table-cell--setting-links, .table-cell--setting-description+.table-cell--setting-links, .table-cell--setting-links+.table-cell--setting-links, .table-cell--overview-links+.table-cell--setting-links, .table-cell--overview+.table-cell--setting-links, .table-cell--setting-overview+.table-cell--setting-links, .table-cell+.table-cell--overview-links, .table-cell--heading+.table-cell--overview-links, .table-cell--history-date+.table-cell--overview-links, .table-cell--setting-description+.table-cell--overview-links, .table-cell--setting-links+.table-cell--overview-links, .table-cell--overview-links+.table-cell--overview-links, .table-cell--overview+.table-cell--overview-links, .table-cell--setting-overview+.table-cell--overview-links, .table-cell+.table-cell--overview, .table-cell--heading+.table-cell--overview, .table-cell--history-date+.table-cell--overview, .table-cell--setting-description+.table-cell--overview, .table-cell--setting-links+.table-cell--overview, .table-cell--overview-links+.table-cell--overview, .table-cell--overview+.table-cell--overview, .table-cell--setting-overview+.table-cell--overview, .table-cell+.table-cell--setting-overview, .table-cell--heading+.table-cell--setting-overview, .table-cell--history-date+.table-cell--setting-overview, .table-cell--setting-description+.table-cell--setting-overview, .table-cell--setting-links+.table-cell--setting-overview, .table-cell--overview-links+.table-cell--setting-overview, .table-cell--overview+.table-cell--setting-overview, .table-cell--setting-overview+.table-cell--setting-overview {
    border-left: 0
  }
}

.table-row--highlight .table-cell, .table-row--highlight .table-cell--heading, .table-row--highlight .table-cell--history-date, .table-row--highlight .table-cell--setting-description, .table-row--highlight .table-cell--setting-links, .table-row--highlight .table-cell--overview-links, .table-row--highlight .table-cell--overview, .table-row--highlight .table-cell--setting-overview {
  background-color: #fdf6bb
}

@media screen and (max-width: 519px) {
  .table-cell, .table-cell--heading, .table-cell--history-date, .table-cell--setting-description, .table-cell--setting-links, .table-cell--overview-links, .table-cell--overview, .table-cell--setting-overview {
    display: block
  }
  .table-cell:nth-last-child(n+2), .table-cell--heading:nth-last-child(n+2), .table-cell--history-date:nth-last-child(n+2), .table-cell--setting-description:nth-last-child(n+2), .table-cell--setting-links:nth-last-child(n+2), .table-cell--overview-links:nth-last-child(n+2), .table-cell--overview:nth-last-child(n+2), .table-cell--setting-overview:nth-last-child(n+2) {
    border-bottom: 0
  }
}

.table-row .table-cell {
  background-color: #f5f5f5
}

.table-cell--heading {
  background-color: #dcdcdc
}

.table-cell--history-date {
  min-width: 160px;
  background-color: #f5f5f5
}

.table-cell--setting-description {
  min-width: 160px
}

.table-row--highlight .table-cell--setting-description {
  background-color: #fdf6bb
}

.table-cell--setting-description.indent:before {
  content: '\00a0\00a0\00a0\00a0- '
}

.table-cell--setting-links {
  background-color: #fff;
  min-width: 220px
}

.table-row--highlight .table-cell--setting-links {
  background-color: #fff
}

.table-cell--setting-overview+.table-cell--setting-links {
  border-left: 0
}

@media screen and (min-width: 690px) and (max-width: 749px) {
  .table-cell--setting-links {
    min-width: 160px
  }
}

@media screen and (max-width: 689px) {
  .table-cell--setting-links {
    border-bottom: 0;
    display: block;
    padding-left: 0;
    padding-right: 0
  }
  .table-row:nth-last-child(n+2) .table-cell--setting-links {
    margin-bottom: 10px
  }
}

.table-cell--setting-links .list-with-arrows {
  margin-bottom: 0;
  margin-top: 0
}

.table-cell--overview-links {
  background-color: #fff;
  min-width: 220px
}

.table-cell--overview+.table-cell--overview-links {
  border-left: 0
}

.table-cell--overview-links .list-with-arrows {
  margin-bottom: 0
}

.table-cell--overview {
  background-color: #fff;
  border: 0;
  min-width: 480px;
  padding: 0
}

@media screen and (max-width: 519px) {
  .table-cell--overview {
    display: none
  }
}

.table-cell--setting-overview {
  font-weight: bold;
  min-width: 277px
}

.table-row, .table-row--highlight {
  display: table-row
}

@media screen and (min-width: 520px) and (max-width: 689px) {
  .my-digid-index .table-row, .my-digid-index .table-row--highlight {
    float: left
  }
}

@media screen and (max-width: 519px) {
  .table-row, .table-row--highlight {
    display: block
  }
}

.table-row:hover, .table-row--highlight:hover {
  background-color: #f5f5f5
}

.username-rule {
  font-weight: bold
}

.username-rules {
  list-style: disc inside;
  margin-top: 10px
}

.ui-dialog-titlebar {
  display: none
}

.ui-corner-all {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px
}

.ui-dialog {
  background-color: #fff;
  z-index: 101
}

.ui-widget-overlay {
  background: #aaa;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=80)' !important;
  filter: alpha(Opacity=80);
  height: 100%;
  left: 0;
  opacity: .8 !important;
  position: fixed;
  top: 0;
  width: 100%
}

.window {
  margin: 0 auto;
  max-width: 960px;
  min-width: 960px;
  padding: 10px;
  position: relative
}

@media screen and (min-width: 1px) {
  .window {
    min-width: 280px
  }
}

.form__item__errors {
  width: 70%
}

.normal-to-front-desk-process-link {
  float: right;
  margin-top: 5px
}

.nowrap {
  white-space: nowrap
}
</style>
