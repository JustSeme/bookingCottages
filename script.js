define(["jquery"], function ($) {
	return function () {
		var self = this
		// Возвращаем настройки виджета
		var settings = self.get_settings()
		let w_code

		function advancedSettingsStyle(w_code, path) {
			return {
				id: `${w_code}-advanced-settings`,
				style: `
			<style id="${w_code}-advanced-settings">
				#work_area.${w_code} {
					padding: 0 25px;
					height: 100vh;
				}
				.${w_code} {
					font-family: system-ui;
					padding-bottom: 0;
				}
				.${w_code}.btn-cont {
					margin-left: auto;
				}
				.${w_code}.btn-cont .${w_code}-btn__save {
					position: relative;
				}
				.${w_code}.btn-cont .${w_code}-btn__save.error {
					background: red;
					opacity: .8;
				}
				.${w_code}.btn-cont .${w_code}-btn__save .loader-cont {
					position: absolute;
					top: 0;
					left: 0;
					z-index: -1;
					opacity: 0;	
					transition: all .3s ease;
				}
				.${w_code}.btn-cont .${w_code}-btn__save .loader-cont.active {
					z-index: 10;
					opacity: 1;	
				}
				
				.${w_code} .fields-settings__entity label {
					margin: 0 0 .5rem 0;
					display: flex;
					align-items: center;
					justify-content: space-between;
					cursor: default;
				}
				.${w_code} .fields-settings__entity .cont .text-input {
					cursor: pointer;
				}
				.${w_code} .auth__entity .text-input,
				.${w_code} .fields-settings__entity .user-company,
				.${w_code} .fields-settings__entity .user-company-advanced,
				.${w_code} .auto__entity .text-input {
					cursor: pointer;
				}
				.${w_code} .block {
					margin-bottom: 1rem;
					padding: 2rem;
					border-radius: 11px;
					box-shadow: 0 0 5px 2px #4b8bf730;
					width: 360px;
					border: 1px solid #4b8bf773;
					background: #fff;
				}

				.${w_code} .auto__entity .block-checkbox{
					display: flex;
					flex-flow: column;
					justify-content: space-between;
					width: calc(47% - 3rem);
					min-width: 400px;
					margin-right: 0;
				}
				.${w_code} .auto__entity .block-checkbox .control-checkbox{
					margin: .5rem 0;
				}
				.${w_code} .auto__entity .block-checkbox .select-statuses-cont {
					width: 100%;
				}
				.${w_code} .auto__entity .block-checkbox .select-pipelines-cont {
					margin-bottom: .5rem;
				}
				.${w_code} .auto__entity .block-checkbox .lead-double-status__input,
				.${w_code} .auto__entity .block-checkbox .log-record-pipelines__input {
					position: relative;
					opacity: 1;
					width: 100%;
					height: auto;
				}
				
				.${w_code} .title:not(.widget-settings__modal *) {
					text-align: center;
					font-size: 17px;
					font-weight: 600;
					margin-bottom: 1rem;
				}
				.${w_code} .cont {
					position: relative;
				}
				.${w_code} .custom__list {
					position: absolute;
					z-index: 10;
					border: 1px solid #4b8bf773;
					top: 2.2rem;
					left: 0;
					width: 100%;
					box-sizing: border-box;
					background: #f1f6ff;
					border-radius: 3px;
					max-height: 200px;
					overflow: hidden;
					overflow-y: auto;
				}
				.${w_code} .custom__list-el {
					padding: .3rem .5rem;
					cursor: pointer;
					color: #1b3446;
				}
				.${w_code} .custom__list-el:hover {
					background: #4b8bf738;
				}
				.${w_code} .fields-settings__entity .wrap-field,
				.${w_code} .fields-settings__entity .top-wrap {
					display: flex;
					justify-content: space-between;
					width: 100%;
				}
				@media(max-width: 1258px) {
					.${w_code} .fields-settings__entity .wrap-field,
					.${w_code} .fields-settings__entity .top-wrap {
						flex-flow: column;
					}
				}

				.${w_code} .fields-settings__entity .wrap-field>* {
					width: calc(47% - 3rem);
					min-width: 400px;
				}
				.${w_code} .auto__entity>* {
					width: calc(47% - 3rem);
					min-width: 400px;
				}
				.${w_code} .auto__entity {
					display: flex;
					width: 100%;
					align-items: start;
					justify-content: space-between;
					box-sizing: border-box;
				}
				.${w_code} .clear__btn {
					position: absolute;
					top: .27rem;
					right: -1.7rem;
					cursor: pointer;
					opacity: 0;
					z-index: -1;
					color: red;
					font-size: 17px;
					font-weight: 600;
					padding: .3rem;
					transition: all .2s ease;
				}
				.${w_code} .clear__btn.active {
					opacity: .6;
					z-index: 100;
				}
				.${w_code} .clear__btn.active:hover {
					opacity: .8;
				}
				.${w_code} .required-mark {
					position: absolute;
					top: .05rem;
					right: .1rem;
					cursor: default;
					color: red;
					font-size: 14px;
				}
				.${w_code} .auto__entity .auto-settings__list {
					min-width: 400px;
				}
				
				
				.${w_code} .auto__entity .auto-settings__list-el {
					display: flex;
					flex-flow: column;
					justify-content: space-between;
					width: 100%;
					height: 100%;
					margin-bottom: 1rem;
				}
				
				.${w_code} .auto__entity .auto-settings__list-el label {
					display: flex;
					justify-content: space-between;
					margin-bottom: .5rem;
					align-items: center;
				}

				.${w_code} .custom__list .subtitle {
					padding: .5rem;
					border: 1px dashed #005aff;
					border-left: none;
					border-right: none;
					border-top-style: solid;
					background: rgb(204,222,255);
					background: linear-gradient(180deg, rgba(204,222,255,1) 0%, rgba(241,246,255,1) 100%);
					text-align: center;
					font-weight: 500;
				}

				.${w_code} .multi-select .custom__list-el,
				.${w_code} .multi-select .subtitle {
					padding-left: 2rem;
					cursor: pointer;
					position: relative;
					text-align: start;
				}
				.${w_code} .multi-select .custom__list-el.selected {
					background: #fff;
				}
				.${w_code} .multi-select .custom__list-el.selected::before,
				.${w_code} .multi-select .subtitle.selected::before {
					content: "✓";
					position: absolute;
					top: calc(50% - 10px);
					left: .65rem;
					font-size: 18px;
				}

				.${w_code} .loader-cont,
				.${w_code}.btn-cont .btn__save .loader-cont {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					height: 100%;				
				}
				.${w_code} .loader,
				.${w_code}.btn-cont .btn__save .loader {
					background: url('${path}/images/loading.gif') no-repeat center;
					background-size: contain;
					width: 5rem;
					height: 5rem;
				}
				.${w_code}.btn-cont .btn__save .loader {
					height: 100%;
					width: 100%;
					background-color: #fff;
				}
				
				.${w_code} .wrap {
					width: 100%;
					padding: 2rem 0rem 0rem 0rem;
				}
				.${w_code} .navbar-popup {
					display: flex;
					justify-content: center;
					border-bottom: 1px solid rgb(76, 139, 247);
				}
				.${w_code} .navbar-popup>* {
					position: relative;
					padding: 3px 10px;
					margin-right: 20px;
					margin-bottom: -1px;
					cursor: pointer;
					opacity: 0.6;
					box-sizing: border-box;
					border-bottom: 3px solid #4c8bf700;
				}
				.${w_code} .navbar-popup>.active {
					opacity: 1;
					border-bottom: 3px solid #4c8bf7;
				}
				.${w_code} .navbar-popup-sauna {
					display: flex;
					justify-content: center;
					border-bottom: 1px solid rgb(76, 139, 247);
				}
				.${w_code} .navbar-popup-sauna>* {
					position: relative;
					padding: 3px 10px;
					margin-right: 20px;
					margin-bottom: -1px;
					cursor: pointer;
					opacity: 0.6;
					box-sizing: border-box;
					border-bottom: 3px solid #4c8bf700;
				}
				.${w_code} .navbar-popup-sauna>.active {
					opacity: 1;
					border-bottom: 3px solid #4c8bf7;
				}
				.${w_code} .navbar-internal {
					display: flex;
					justify-content: center;
					border-bottom: 1px solid rgb(76, 139, 247);
				}
				.${w_code} .navbar-internal>* {
					position: relative;
					padding: 3px 10px;
					margin-right: 20px;
					margin-bottom: -1px;
					cursor: pointer;
					opacity: 0.6;
					box-sizing: border-box;
					border-bottom: 3px solid #4c8bf700;
				}
				.${w_code} .navbar-internal>.active {
					opacity: 1;
					border-bottom: 3px solid #4c8bf7;
				}
				.${w_code} .navbar {
					display: flex;
					justify-content: center;
					border-bottom: 1px solid rgb(76, 139, 247);
				}
				.${w_code} .navbar>* {
					position: relative;
					padding: 3px 10px;
					margin-right: 20px;
					margin-bottom: -1px;
					cursor: pointer;
					opacity: 0.6;
					box-sizing: border-box;
					border-bottom: 3px solid #4c8bf700;
				}
				.${w_code} .navbar>.active {
					opacity: 1;
					border-bottom: 3px solid #4c8bf7;
				}
				.${w_code} .wrap-entity {
					height: calc(100vh - 121px);
					overflow: hidden;
					overflow-y: auto;
				}
				.${w_code} .wrap-entity>* {
					padding: 1rem 10px;
				}
				#work-area-${w_code} .alert {
					box-shadow: 0 0 5px 2px #f74b4b57;
				}
				/* Чекбокс datetime */

				.${w_code} .control-checkbox__body {
					display: inline-flex;
				}

				.${w_code} .control-checkbox__body input {
					position: absolute;
					opacity: 0;
					z-index: 4;
					width: 20px;
					height: 20px;
					cursor: pointer;
				}
				.${w_code} .checkbox__helper {
					background: 0 0;
					border: 0;
					position: inherit;
					width: 24px;
					height: 32px;
				}

				.${w_code} .checkbox__helper::before {
					content: "";
					position: absolute;
					height: 1px;
					width: 9px;
					right: 0;
					left: auto;
					top: 50%;
					background: #516570;
				}
				.${w_code} .checkbox__helper::after {
					content: "";
					position: absolute;
					width: 14px;
					height: 14px;
					border: 1px solid #516570;
					border-radius: 50%;
					left: 0;
					top: calc(50% - 8px);
				}

				.${w_code} .is-checked .checkbox__helper::before{
					left: 0;
					right: auto;
				}
				.${w_code} .is-checked .checkbox__helper::after{
					right: 0;
					left: inherit;
					background: #4c8bf7;
					border-color: transparent;
				}

				.${w_code} .additionaly-fields__cont {
					padding: .7rem 1rem;
					background: #f5f5f5;
					border-radius: 3px;
				}
				.${w_code} .auto__entity .task-checkbox .control-checkbox__body {
					min-width: 239px;
				}
				.${w_code} .auto__entity  .task-checkbox .control-checkbox__text {
					margin-left: 0;
				}
				.${w_code} .additionaly-fields__cont .add-cont {
					display: flex;
					align-items: center;
				}
				.${w_code} .additionaly-fields__cont .add-cont .cont {
					width: 100%;
					margin-right: 5px;
				}
				.${w_code} .additionaly-fields__cont .add-cont input {
					width: 100%;
				}
				.${w_code} .error {
					box-shadow: 0 0 8px 1px #ff000057;
				}
				.${w_code} .additionaly-fields__cont label[for="service-field"] {
					width: calc(100% - 1.7rem);
				}

				.${w_code} .auth__entity .auth-success-block {
					color: green;
					font-size: 20px;
					text-align: center;
				}
				.${w_code} .auth__entity .auth-error-block {
					color: red;
					text-align: center;
				}
				.${w_code} .auth__entity .auth-data {
					display: flex;
					flex-flow: column;
					justify-content: space-between;
				}
				.${w_code} .auth__entity .auth-data .title {
					font-weight: bold;
				}
				.${w_code} .auth__entity .auth-data .auth-btn {
					width: auto;
					min-width: 11rem;
					text-align: center;
					margin: 0 auto;
				}
				.${w_code} .auth__entity .auth-data .auth-btn.error {
					background: #ff00009e;
					border-color: red;
				}
				.${w_code} .auth__entity .title {
					text-align: center;
					font-size: 16px;
				}
				.${w_code} .auth__entity .auth-data>label {
					display: flex;
					flex-flow: column;
					margin-bottom: .5rem;
				}
				.${w_code}.modal-rules .btn-block {
					position: sticky;
					bottom: 0;
					width: 100%;
					border-top: 1px solid #e4e4e4;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					background: #ebebeb87;
				}
				.${w_code}.modal-rules .btn-block>* {
					margin: .5rem;
				}
				.${w_code} label {
					margin: 0 0 .5rem 0;
					margin-top: .5rem;
					display: flex;
					align-items: center;
					justify-content: space-between;
					cursor: default;
				}
				.${w_code} li {
					list-style-type: none;
				}
				.${w_code} .overlay {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					display: none;
				}
				.${w_code} .popup {
					position: absolute;
					width: auto;
					height: auto;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					padding: 15px 30px;
					box-sizing: border-box;
					background-color: #fff;
					box-shadow: 0 0 5px 2px #4b8bf730;
					z-index: 3;
				}
				.${w_code} .close-popup {
					position: absolute;
					top: 15px;
					right: 9px;
					width: 23px;
					height: 23px;
					cursor: pointer;
					z-index: 60;
				}
				.${w_code} .popup .cont>* {
					margin: 6px;
				}
				.${w_code} .conveniences-list label {
					justify-content: start;
				}
				.${w_code} .conveniences-group-list label {
					margin-left: 5px;
				}
				.${w_code} .conveniences-list input[type="checkbox"] {
					margin-right: 10px;
				}
				.${w_code} .conveniences-list-sauna input[type="checkbox"] {
					margin-right: 10px;
				}
				.${w_code} [size="4"] {
					width: 4em !important;
				}
				.${w_code} .conveniences_value {
					margin-left: 3px;
				}
				.${w_code} .conveniences-list {
					display: grid;
					grid-template-columns: 250px 250px 250px;
					font-size: 14px;
				}
				.${w_code} .file__item {
					position: relative;
				}
				.${w_code} .file__preview {
					display: inline-block;
					max-width: 100px;
					padding: 10px 0px 0px 0px;
				}
				.${w_code} .file__preview img {
					max-width: 100%;
				}
				.${w_code} .conveniences-icon__ploshad::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/furniture/space:площадь.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__kondicioner::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/furniture/air%20conditioner:кондиционер.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__obogrevatel::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/furniture/heater:обогреватель.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__ventilator::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/furniture/fan:вентилятор.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__camin::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/furniture/fireplace%20:камин.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__safe::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/furniture/safe:сейф.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__work-zone::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/furniture/work%20space:рабочее%20пространство.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__utug::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/furniture/iron:утюг.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__wardrobe::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/furniture/wardrobe:шкаф.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__telephone::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/furniture/phone:телефон.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__pillows::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/furniture/Extra%20pillows%20and%20blankets:Дополнительные%20подушки%20и%20одеяла.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__mosquito::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/furniture/mosquito%20net:москитная%20сетка.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__light-tight::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/furniture/Blackout%20curtains:Светонепроницаемые%20шторы.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__baby-cot::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/furniture/baby%20bed:детская%20кровать.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__balcony::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/furniture/balcony:балкон.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__own-bathroom::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathroom/Собственный%20санузел:personal%20toilet.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__general-bathroom::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathroom/shared%20toilet:общий%20санузел%20.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__jacuzzi::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathroom/jacuzzi:джакузи.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__bathrobes::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathroom/robes:халаты.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__slippers::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathroom/slippers:тапочки.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__toiletries::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathroom/toiletries:туалетно-косметические%20принадлежности.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__bath::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathroom/bath:ванна.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__shower::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathroom/shower:душ.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__bidet::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathroom/bidet:биде.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__fan::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathroom/hair%20dryer:фен.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__drying::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathroom/Dryer:сушитаельная%20машина.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__washer::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathroom/washing%20machine:стиральная%20машина.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__swimming::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathroom/swimming%20pool:бассейн.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__for-cooking::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/citchen/kitchen%20staff:все%20необходимое%20для%20приготовления%20еды.png.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__nuke::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/citchen/microwave:микроволновка.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__minibar::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/citchen/mini%20bar:минибар.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__oven::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/citchen/oven:духовка.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__fridge::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/citchen/fridge:холодильник.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__tableware::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/citchen/cutlery:столовые%20приборы.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__toaster::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/citchen/toaster:тостер.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__dining-table::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/citchen/dinner%20table:обеденный%20стол.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__cofe-tea::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/citchen/coffee%20Tea:коффе%20чай.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__cofemachine::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/citchen/coffee%20maker:кофеварка.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__teapot::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/citchen/kettle:чайник.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__tv::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/electronics/TV:телевизор.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__cable-tv::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/electronics/cable%20TV:кабельное%20телевиденье.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__statellit-tv::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/electronics/satellite%20TV:спутниковое%20телевиденье.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__sound-system::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/electronics/sound%20system:звукавая%20система.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__wifi::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/electronics/wi%20fi.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__wired-internet::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/electronics/cable%20internet:кабельный%20интернет.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__sea::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/viewof/sea:море.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__lake::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/viewof/lake:озеро.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__river::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/viewof/river:река.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__mountains::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/viewof/mountains:горы.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__city::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/viewof/city:город.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__courtyard::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/viewof/courtyard:двор.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__swimming::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/viewof/swimming%20pool:бассйн.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__forest::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/viewof/garden,%20forest:сад,лес.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__alarm::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/service/Alarm:будильник.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-icon__luggage-storage::before {
					content: "";
					background-image: url(https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/service/luggage%20storage:хранение%20багажа.png);
					background-size: cover;
					height: 18px;
					width: 18px;
					margin-right: 5px;
					display: inline-block;
					vertical-align: middle;
				}
				.${w_code} .conveniences-list-sauna label {
					justify-content: start;
				}
				.${w_code} .conveniences-list-sauna {
					display: grid;
					grid-template-columns: 250px 250px 250px;
				}
				.${w_code} .conveniences-list-sauna img {
					height: 18px;
					width: 18px;
					margin-right: 5px;
				}
				.${w_code} .form__preview {
					display: grid;
					grid-template-columns: 154px 154px 154px 154px;
				}
				.${w_code} .form__preview__wrap {
					box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
					width: 154px;
					height: 122px;
					margin-bottom: 25px;
					margin-right: 15px;
					align-items: center;
					justify-content: center;
					text-align: center;
				}
				.${w_code} .form__preview img {
					width: 150px;
					height: 120px;
				}
				.${w_code} .photos__form {
					margin: 5px auto;
					padding: 30px 0;
				}
				.${w_code} .form__label {
					font-size: 18px;
					display: block;
					margin-bottom: 10px;
				}
				.${w_code} .form__input {
					height: 50px;
					padding: 0px 20px;
					border-radius: 5px;
					width: 100%;
					font-size: 18px;
				}
				.${w_code} .form__limitations {
					color: grey;
					font-size: 11px;
					margin-top: 20px;
				}
				.${w_code} #deleteImage {
					cursor: pointer;
					height: 15px;
					width: 15px;
				}
				.${w_code} #deleteImageSauna {
					cursor: pointer;
					height: 15px;
					width: 15px;
				}
				.${w_code} .deleteTrash {
					cursor: pointer;
					height: 15px;
					width: 15px;
				}
				.${w_code} .checkbox-input {
					height: 20px;
					width: 20px;
				}
				.${w_code} .description-textarea {
					min-width: 360px;
					min-height: 100px;
				}
				.${w_code} .button-input {
					margin: 15px 0px;
				}
				.${w_code} .time-block-wrap__form {
					display: flex;
					flex-direction: row;
					font-size: 11px;
					text-align: center;
					justify-content: center;
					align-items: center;
				}
				.${w_code} .form__cell {
					position: relative;
					display: inline-block;
					width: 100%;
					font-size: 0;
					vertical-align: top;
				}
				.${w_code} .form__set {
					position: relative;
					display: inline-block;
					margin-top: -1rem;
					margin-top: 0;
					font-size: 0;
					vertical-align: text-top;
				}
				.${w_code} .table.m-default {
					display: inline-block;
					height: auto;
					margin: 0 0 2rem 0;
					padding: 0 2rem;
					background: transparent;
					overflow: hidden;
				}
				.${w_code} .table {
					position: relative;
					width: 100%;
				}
				.${w_code} .table__table {
					width: 100%;
					border-collapse: collapse;
					border-spacing: 0;
					background: #fff;
				}
				.${w_code} .table__cell {
					position: relative;
					padding: 0.75rem 0.75rem;
					text-align: left;
					line-height: 1.2em;
					border: 1px solid #ededed;
				}
				.${w_code} .table__cell.m-rooms {
					font-size: 12px;
					vertical-align: bottom;
					padding-bottom: 1rem;
					border-bottom: 1px solid #ededed;
				}
				.${w_code} .table__col.m-holiday {
					background: #FFF4F4;
				}
				.${w_code} .table__head .table__row:last-of-type .table__cell {
					padding-bottom: 1rem;
					border-bottom: 1px solid #ededed;
					padding-top: 1rem;
				}
				.${w_code} .table__cell.m-room {
					max-width: 250px;
					padding-top: 0;
					padding-bottom: 0;
					white-space: nowrap;
					width: 5.7rem;
				}
				.${w_code} .table__overflow {
					position: relative;
					display: block;
					width: 100%;
					height: 2.7rem;
					line-height: 2.7rem;
					word-break: break-all;
					overflow: hidden;
					font-size: 13px;
				}
				.${w_code} .table__icons {
					position: absolute;
					top: 0;
					right: 0;
					color: #444;
					font-size: var(--px-rem-13);
					background: #fff;
					z-index: 3;
				}
				.${w_code} .table__cell.m-price {
					min-width: 5.6rem;
					padding: 0;
					text-align: right;
					white-space: nowrap;
					word-spacing: -0.2em;
				}
				.${w_code} .table__price {
					position: relative;
					height: 2.7rem;
					line-height: 2.7rem;
				}
				.${w_code} .table__input {
					position: absolute;
					top: 0;
					right: 0;
					bottom: -1px;
					left: 0;
					width: 100%;
					text-align: right;
					z-index: 51;
					padding-right: 1.5rem;
					font-size: 13px;
				}
				.${w_code} ._error {
					box-shadow: 0 0 15px red;
				}
				.${w_code} .description-sauna__entity-popup-sauna {
					font-size: 14px;
				}
				.${w_code} .table2 {
					margin-bottom: 20px;
				}
				.${w_code} .table2 {
					position: relative;
					width: 100%;
					height: 68%;
					margin: 0 auto -10rem auto;
					overflow: auto;
					background: #fff;
					-webkit-user-select: none;
					user-select: none;
				}
				.${w_code} .table3 {
					position: relative;
					width: 100%;
					height: 80%;
					margin: 0 auto -10rem auto;
					overflow: auto;
					background: #fff;
					-webkit-user-select: none;
					user-select: none;
				}
				.${w_code} .table2.m-dark-border .table2__sidebar {
					border: 1px solid rgba(0,0,0,0.3);
				}
				.${w_code} .table2__sidebar {
					position: absolute;
					left: 0;
					width: 193px;
					z-index: 8;
					background-color: #FFFFFF;
					border-right: 1px solid #dfdfdf;
				}
				.${w_code} .table3__sidebar {
					position: absolute;
					left: 0;
					width: 193px;
					z-index: 8;
					background-color: #FFFFFF;
					border-left: 1px solid rgba(0,0,0,0.3);
					border-bottom: 1px solid rgba(0,0,0,0.3);
				}
				.${w_code} .table2__corner {
					padding: 24px;
					font-weight: bold;
					font-size: 15px;
					background: #fff;
				}
				.${w_code} .form-tariff .table2__corner {
					height: 40px;
				}
				.${w_code} .table3__corner {
					padding: 9px;
					font-weight: bold;
					font-size: 14px;
					background: #fff;
					height: 18px;
					border-top: 1px solid rgba(0,0,0,0.3);
				}
				.${w_code} .table2__sidecell_height_md {
					height: 50px;
				}
				.${w_code} .table2__sidecell {
					position: relative;
					padding: 0 12px 0 12px;
					height: 36px;
					border-top: 1px solid rgba(0,0,0,0.3);
					line-height: 36px;
				}
				.${w_code} .js-popup-tarif-sauna {
					width: 95%;
					height: 60%
				}
				.${w_code} .form-tariff>* {
					justify-content: center;
					text-align: center;
					align-items: center;
				}
				.${w_code} .js-popup-tarif-cottage {
					width: 95%;
					height: 60%;
				}
				.${w_code} .js-popup-tariff-cottage-edit {
					width: 95%;
					height: 75%;
				}
				.${w_code} .table2__layout {
					position: relative;
					margin: 0 0 0 192px;
				}
				.${w_code} .table3__layout {
					margin: 0 0 0 192px;
				}
				.${w_code} .table2__head {
					position: absolute;
					top: 0;
					left: 0;
					font-size: 0;
					z-index: 5;
					display: flex;
					flex-flow: column;
					justify-content: flex-end;
					background-color: #FFFFFF;
				}
				.${w_code} .table3__head {
					position: absolute;
					top: 0;
					left: 193px;
					font-size: 0;
					z-index: 5;
					display: flex;
					flex-flow: column;
					justify-content: flex-end;
					background-color: #FFFFFF;
				}
				.${w_code} .grid {
					display: table;
					width: 100%;
				}
				.${w_code} .grid {
					display: table;
					width: 100%;
				}
				.${w_code} .grid {
					position: relative;
					font-size: 0;
				}
				.${w_code} .table2__month {
					position: relative;
					display: table-cell;
					white-space: nowrap;
					max-height: 93px;
				}
				.${w_code} .table2__dates {
					display: inline-block;
					width: 102px;
					height: 50%;
					font-weight: bold;
					background: #fff;
					border-left: 1px solid rgba(0,0,0,0.3);
				}
				.${w_code} .table2__month:last-child {
					border-right: 1px solid rgba(0,0,0,0.3);
				}
				.${w_code} .table2__month:last-child .table2__month-header {
					border-right: none;
				}
				.${w_code} .table3__layout .table2__dates {
					border-top: 1px solid rgba(0,0,0,0.3);
				}
				.${w_code} .table2__date {
					display: block;
					padding: 6px 12px 0 12px;
					color: black;
					font-size: 12px;
					line-height: 16px;
					clear: both;
					text-align: center;
				}
				.${w_code} .table2__day {
					display: block;
					padding: 0 12px 6px 12px;
					color: black;
					font-size: 12px;
					line-height: 16px;
					clear: both;
					text-align: center;
				}
				.${w_code} .form-tariff {
					padding-top: 13px;
					position: absolute;
					width: 90%;
					height: 95%;
					padding-bottom: 20px;
				}
				.${w_code} .table2__month-header {
					font-weight: bold;
					font-size: 15px;
					height: 21px;
					padding: 11px;
					border: 1px solid rgba(0,0,0,0.3);
					border-left: 0;
					text-align: left;
					color: black;
				}
				.${w_code} .table2__table {
					border-collapse: collapse;
					border-spacing: 0;
				}
				.${w_code} .table2__cell.m-price {
					border: 1px solid rgba(0,0,0,0.3);
					border-collapse: collapse;
					min-width: 102px;
					max-width: 102px;
					padding: 0;
					font-size: 13px;
					text-align: right;
					white-space: nowrap;
					word-spacing: -0.2em;
					position: relative;
				}
				.${w_code} .table2__input {
					top: 0px;
					height: 36px;
					right: 0;
					left: 0;
					width: 100%;
					font-size: 13px;
					text-align: center;
					background: transparent;
					z-index: 51;
				}
				.${w_code} #saveUniqueDatas {
					position:absolute;
					bottom:0;
				}
				.${w_code} .change-price-for-period {
					cursor: pointer;
					width: 30%;
					margin: 10px;
					padding: 5px;
					margin-left: auto;
					font-size: 13px;
				}
					.${w_code} .js-overlay-tarif-sauna-internal {
					z-index: 100;
				}
				.${w_code} .js-overlay-tarif-cottage-internal {
					z-index: 100;
				}
				.${w_code} .form__period__item {
					text-align: center;
					align-items: center;
					justify-content-center;
					display: flex;
					flex-direction: row;
					width: 
				}
				.${w_code} .js-popup-tarif-sauna-internal {
					width: 95%;
					height: 75%;
				}
				.${w_code} .js-popup-tarif-cottage-internal {
					width: 95%;
					height: 75%;
				}
				.${w_code} .js-popup-tarif-cottage-edit-internal {
					width: 95%;
					height: 85%;
				}
				.${w_code} .table3 .table2__date {
					padding: 10px;
				}
				.${w_code} .entity-list {
					display: flex;
					flex-direction: row;
				}
				.${w_code} .entity-list>* {
					padding: 10px;
				}
				.${w_code} .saved-container-cottage {
					position: absolute;
					right: 5px;
					bottom: 5px;
					display: flex;
					flex-direction: row;
				}
				.${w_code} .saved-container-cottage .successText {
					z-index: 100;
					margin: 10px;
					padding: 10px;
				}
				.${w_code} .saved-container-sauna {
					position: absolute;
					right: 5px;
					bottom: 5px;
					display: flex;
					flex-direction: row;
				}
				.${w_code} .saved-container-sauna .successText {
					z-index: 100;
					margin: 10px;
					padding: 10px;
				}
				.${w_code} .title-tariff-input {
					margin-right: auto;
				}
				.${w_code} .edit {
					cursor: pointer;
				}
				.${w_code} .blocked_periods__input {
					cursor: pointer;
				}
				.${w_code} .period-btn {
					position: absolute;
					right: 10px;
					bottom: 10px;
				}
				.${w_code} .js-popup-sauna {
					height: 85%;
				}
			</style>`,
			}
		}

		const automationArr = []
		const recordStatuses = {}

		function initConstArr() {
			const automationLangs = langs((data) => data.automation)
			const recordLangs = langs((data) => data.record)
			!automationArr.length &&
				automationArr.push(
					{
						name: automationLangs.newBooking,
						id: 1,
						key: "status_1",
					},
					{
						name: automationLangs.bookingAccept,
						id: 2,
						key: "status_2",
					},
					{
						name: automationLangs.checkIn,
						id: 3,
						key: "status_3",
					},
					{
						name: automationLangs.checkOut,
						id: 4,
						key: "status_4",
					},
					{
						name: automationLangs.bookingCancelled,
						id: 5,
						key: "status_5",
					}
				)
			if (!Object.keys(recordStatuses).length) {
				recordStatuses["0"] = recordLangs.waitClient
				recordStatuses["1"] = automationLangs.clientCome
				recordStatuses["-1"] = automationLangs.clientNoCome
				recordStatuses["2"] = automationLangs.clientConfirm
			}
		}

		function initStyle(styleFunc) {
			const {id, style} = styleFunc(w_code, settings.path)

			if ($(`#${id}`).length === 0) $("body").prepend(style)
		}

		function getFieldsAmoList(type, entity) {
			let res = `<ul class="custom__list hidden custom-scroll">`
			let arr = [],
				srcAmo = {
					...AMOCRM.constant("account").cf,
					...AMOCRM.constant("account").predefined_cf,
				},
				needleKeys = false
			const fieldsLangs = langs((data) => data.fields)
			if (entity == "leads") {
				needleKeys = ["ENTREE_DEALS"]
				let defField = [
					{
						id: "lead_price",
						name: fieldsLangs.budgetLead,
						type: 2,
					},
					{
						id: "name",
						name: fieldsLangs.nameLead,
						type: 1,
					},
				]
				arr.push(...defField)
			} else if (entity == "contacts") {
				needleKeys = ["ENTREE_CONTACTS"]
				let defField = [
					{
						id: "name",
						name: fieldsLangs.nameContact,
						type: 1,
					},
				]
				arr.push(...defField)
			} else if (entity == "contacts|companies") {
				needleKeys = ["ENTREE_CONTACTS", "ENTREE_COMPANY"]
			}

			if (needleKeys) {
				needleKeys.forEach((key) => {
					for (let id in srcAmo) {
						if (
							srcAmo[id][key] == 1 &&
							srcAmo[id].TYPE_ID != 3 &&
							srcAmo[id].TYPE_ID != 7 &&
							srcAmo[id].TYPE_ID != 9 &&
							srcAmo[id].TYPE_ID != 10 &&
							srcAmo[id].TYPE_ID != 11 &&
							srcAmo[id].TYPE_ID != 13 &&
							srcAmo[id].TYPE_ID != 14 &&
							srcAmo[id].TYPE_ID != 18
						) {
							arr.push({
								id: srcAmo[id].ID,
								name: srcAmo[id].NAME,
								type: srcAmo[id].TYPE_ID,
							})
						}
					}
				})
			}

			if (type == "text") {
				arr = arr.filter((item) => item.type == 1 || item.type == 9)
			} else if (type == "text|number") {
				arr = arr.filter(
					(item) => item.type == 2 || item.type == 1 || item.type == 9
				)
			} else if (type == "list|multilist|text") {
				arr = arr.filter(
					(item) =>
						item.type == 4 || item.type == 5 || item.type == 1 || item.type == 9
				)
			} else if (type == "date") {
				arr = arr.filter((item) => item.type == 6)
			} else if (type == "datetime") {
				arr = arr.filter((item) => item.type == 19)
			} else if (type == "date|text") {
				arr = arr.filter(
					(item) => item.type == 19 || item.type == 6 || item.type == 1
				)
			} else {
				arr = arr.filter((item) => item.type == 2)
			}
			arr.forEach((el) => {
				res += `
			<li class="custom__list-el" data-id="${el.id}"
				data-name="${el.name}" data-type="${el.type}">
				${el.name}
			</li>
			`
			})
			res += "</ul>"
			return res
		}

		function findStatusName(id, pipeId) {
			if (!id) return ""
			let pipe = pipelines.find((el) => el.id == pipeId)
			if (pipe) {
				let status = pipe.statuses.find((s) => s.id == id)
				if (status) return status.name
			}

			return ""
		}

		function findFieldName(id, entity) {
			if (!id) return ""
			if (entity == "leads") {
				if (id == "lead_price") return "Бюджет сделки"
				if (id == "name") return "Название сделки"
			}
			if (entity == "contacts") {
				if (id == "name") return "Имя контакта"
			}
			let srcAmo = {
				...AMOCRM.constant("account").cf,
				...AMOCRM.constant("account").predefined_cf,
			}

			return srcAmo[id] ? srcAmo[id].NAME : ""
		}

		function getPriceTariffs(cottageCategoriesData, bathhouseTariffs, hotelTariffs, saunaCategoriesData) {
			let periodFrom = self.render(
				{ref: "/tmpl/controls/date_field.twig"},
				{
					name: "from",
					placeholder: "Выберите дату",
				}
			)
			let periodUpTo = self.render(
				{ref: "/tmpl/controls/date_field.twig"},
				{
					name: "to",
					placeholder: "Выберите дату",
				}
			)

			function getMonth(saunaCategoriesData, cottageCategoriesData) {
				const days = [
					"Воскресенье",
					"Понедельник",
					"Вторник",
					"Среда",
					"Четверг",
					"Пятница",
					"Суббота",
				]

				function getDaysInMonth(year, month) {
					return new Date(year, month, 0).getDate()
				}

				function getMonthForLayout() {
					year = new Date().getFullYear()
					month = new Date().getMonth() + 2
					return new Date(year, month, 0).toLocaleString("ru", {
						month: "long",
					})
				}

				let daysInCurrentMonth = getDaysInMonth(
					new Date().getFullYear(),
					new Date().getMonth() + 1
				)

				function getDatesForLayout(counter) {
					const layoutDates = []
					let dayOfWeek = 1
					for (let i = 0; i < 30 - counter; i++) {
						let currentDate = 1
						currentDate = currentDate + i
						dayOfWeek = dayOfWeek + i
						if (dayOfWeek >= 7) {
							dayOfWeek = dayOfWeek % 7
						}

						layoutDates.push(`
						<div class="table2__dates">
							<span class="table2__date" data-day="${currentDate}">${currentDate}</span>
							<span class="table2__day">${days[dayOfWeek]}</span>
						</div>
					`)
					}
					let dates = layoutDates.join()

					if(saunaCategoriesData != '') {
						$(".m-table-sauna").append(`
						<div class="table2__month second-month">
							<div class="table2__month-header">
								${getMonthForLayout()}
							</div>
							${dates}
						</div>
						`)	
					}
					if(cottageCategoriesData != '') {
						$(".m-table-cottage").append(`
						<div class="table2__month">
							<div class="table2__month-header">
								${getMonthForLayout()}
							</div>
							${dates}
						</div>
						`)
					}
				}

				const layoutDates = []
				for (let i = 0; i < 30; i++) {
					let currentDate = new Date().getDate()
					currentDate = currentDate + i
					let dayOfWeek = new Date().getDay() + i
					if (dayOfWeek >= 7) {
						dayOfWeek = dayOfWeek % 7
					}
					if (currentDate > daysInCurrentMonth) {
						let dates = layoutDates.join()

						$(".m-table-sauna").append(`
						<div class="table2__month">
							<div class="table2__month-header">
								${new Date().toLocaleString("ru", {month: "long"})}
							</div>
							${dates}
						</div>
					`)
						$(".m-table-cottage").append(`
						<div class="table2__month">
							<div class="table2__month-header">
								${new Date().toLocaleString("ru", {month: "long"})}
							</div>
							${dates}
						</div>
					`)
						getDatesForLayout(i)
						break
					}

					layoutDates.push(`
					<div class="table2__dates">
						<span class="table2__date" data-day="${currentDate}">${currentDate}</span>
						<span class="table2__day">${days[dayOfWeek]}</span>
					</div>
				`)
				}
			}

			function getLeftSideBarCottage(cottageCategoriesData, saunaCategoriesData) {
				function getDaysInMonth(year, month) {
					return new Date(year, month, 0).getDate()
				}
				function getFormattedDate(j) {
					let daysInCurrentMonth = getDaysInMonth(new Date().getFullYear(), new Date().getMonth() + 1)

					let date = new Date()
					let currentMonth = date.getMonth() + 1
					let currentDate = new Date().getDate()
					currentDate = currentDate + j
					if(currentDate > daysInCurrentMonth) {
						currentMonth = currentMonth + 1
					}

					let str = date.getFullYear() + "-" + currentMonth + "-" + (currentDate > daysInCurrentMonth ? $($('.table2__date')[j + 8]).attr('data-day') : currentDate)
					return str
				}

				let res = ``
				if(cottageCategoriesData == '') return
				cottageCategoriesData.forEach((item) => {
					res += `
					<div class="table2__sidecell table2__sidecell_height_md m-dark-border" title="${item.name}">
						${item.name}
					</div>
				`
					$(".table2__body__cottage").append(
						'<tr class="table2__row table2__row_height_md js-table2__row__cottage"></tr>'
					)
					$(".table2__body__cottage-internal").append(
						'<tr class="table2__row table2__row_height_md js-table2__row__cottage-internal"></tr>'
					)
				})

				saunaCategoriesData.forEach((item) => {
					$(".table2__body__sauna").append(
						'<tr class="table2__row table2__row_height_md js-table2__row__sauna"></tr>'
					)
					$(".table2__body__sauna-internal").append(
						'<tr class="table2__row table2__row_height_md js-table2__row__sauna-internal"></tr>'
					)
				})

				for (let i = 0; i < $(".js-table2__row__cottage").length; i++) {
					for (let j = 0; j < 30; j++) {
						$($(".js-table2__row__cottage")[i]).append(`
						<td class="table2__cell m-price">
							<div class="table2__price">
								<input style="display: flex;" type="number" name="price[${i}][${j}]" class="table2__input m-third status m-green-light" data-category="${
							cottageCategoriesData[i].category_id
						}" data-date="${getFormattedDate(j)}" value="">
							</div>
						</td>
					`)
					}
				}

				for (let i = 0; i < $(".js-table2__row__sauna").length; i++) {
					for (let j = 0; j < 30; j++) {
						$($(".js-table2__row__sauna")[i]).append(`
						<td class="table2__cell m-price">
							<div class="table2__price">
								<input style="display: flex;" type="number" name="price[${i}][${j}]" class="table2__input m-third status m-green-light" data-category="${saunaCategoriesData[i].category_id}" data-date="${getFormattedDate(j)}" value="">
							</div>
						</td>
					`)
					}
				}

				$(".table2__body__cottage-internal").append(
					'<tr class="table2__row table2__row_height_md js-table2__row__cottage-internal"></tr>'
				)

				$(".table2__body__sauna-internal").append(
					'<tr class="table2__row table2__row_height_md js-table2__row__sauna-internal"></tr>'
				)

				for (let i = 0; i < $(".js-table2__row__cottage").length + 1; i++) {
					for (let j = 0; j < 8; j++) {
						let dayOfTheWeek
						switch (j) {
							case 0:
								dayOfTheWeek = "monday"
								break
							case 1:
								dayOfTheWeek = "tuesday"
								break
							case 2:
								dayOfTheWeek = "wednesday"
								break
							case 3:
								dayOfTheWeek = "thursday"
								break
							case 4:
								dayOfTheWeek = "friday"
								break
							case 5:
								dayOfTheWeek = "saturday"
								break
							case 6:
								dayOfTheWeek = "sunday"
								break
							case 7:
								dayOfTheWeek = "allDays"
						}
						if (i === 0) {
							$($(".js-table2__row__cottage-internal")[i]).append(`
						<td class="table2__cell m-price">
							<div class="table2__price">
								<input style="display: flex;" type="number" name="price-period[${i}][${j}]" class="table2__input m-third status m-green-light" data-week="${dayOfTheWeek}" data-category-period="allCategories" value="">
							</div>
						</td>
						`)
						} else {
							$($(".js-table2__row__cottage-internal")[i]).append(`
						<td class="table2__cell m-price">
							<div class="table2__price">
								<input style="display: flex;" type="number" name="price-period[${i}][${j}]" class="table2__input m-third status m-green-light" data-week="${dayOfTheWeek}" data-category-period="${
								cottageCategoriesData[i - 1].category_id
							}" value="">
							</div>
						</td>
						`)
						}
					}
				}

				for (let i = 0; i < $(".js-table2__row__sauna").length + 1; i++) {
					for (let j = 0; j < 8; j++) {
						let dayOfTheWeek
						switch (j) {
							case 0:
								dayOfTheWeek = "monday"
								break
							case 1:
								dayOfTheWeek = "tuesday"
								break
							case 2:
								dayOfTheWeek = "wednesday"
								break
							case 3:
								dayOfTheWeek = "thursday"
								break
							case 4:
								dayOfTheWeek = "friday"
								break
							case 5:
								dayOfTheWeek = "saturday"
								break
							case 6:
								dayOfTheWeek = "sunday"
								break
							case 7:
								dayOfTheWeek = "allDays"
						}
						if (i === 0) {
							$($(".js-table2__row__sauna-internal")[i]).append(`
						<td class="table2__cell m-price">
							<div class="table2__price">
								<input style="display: flex;" type="number" name="price-period[${i}][${j}]" class="table2__input m-third status m-green-light" data-week="${dayOfTheWeek}" data-category-period="allCategories" value="">
							</div>
						</td>
						`)
						} else {
							$($(".js-table2__row__sauna-internal")[i]).append(`
						<td class="table2__cell m-price">
							<div class="table2__price">
								<input style="display: flex;" type="number" name="price-period[${i}][${j}]" class="table2__input m-third status m-green-light" data-week="${dayOfTheWeek}" data-category-period="${
								saunaCategoriesData[i - 1].category_id
							}" value="">
							</div>
						</td>
						`)
						}
					}
				}

				$("#leftSideBarCottage").append(res)
				$("#leftSideBarCottageInternal").append(res)
			}


			function getLeftSideBarSauna(saunaCategoriesData) {
				function getDaysInMonth(year, month) {
					return new Date(year, month, 0).getDate()
				}
				function getFormattedDate(j) {
					let daysInCurrentMonth = getDaysInMonth(new Date().getFullYear(), new Date().getMonth() + 1)

					let date = new Date()
					let currentMonth = date.getMonth() + 1
					let currentDate = new Date().getDate()
					currentDate = currentDate + j
					if(currentDate > daysInCurrentMonth) {
						currentMonth = currentMonth + 1
					}

					let str = date.getFullYear() + "-" + currentMonth + "-" + (currentDate > daysInCurrentMonth ? $($('.table2__date')[j + 8]).attr('data-day') : currentDate)
					return str
				}

				let res = ``
				if(saunaCategoriesData == '') return
				saunaCategoriesData.forEach((item) => {
					res += `
					<div class="table2__sidecell table2__sidecell_height_md m-dark-border" title="${item.name}">
						${item.name}
					</div>
				`
					$(".table2__body").append(
						'<tr class="table2__row table2__row_height_md js-table2__row__sauna"></tr>'
					)
					$(".table2__body-internal").append(
						'<tr class="table2__row table2__row_height_md js-table2__row-internal"></tr>'
					)
				})

				for (let i = 0; i < $(".js-table2__row__sauna").length; i++) {
					for (let j = 0; j < 30; j++) {
						$($(".js-table2__row__sauna")[i]).append(`
						<td class="table2__cell m-price">
							<div class="table2__price">
								<input style="display: flex;" type="number" name="price[${i}][${j}]" class="table2__input m-third status m-green-light" data-category="${
							saunaCategoriesData[i].category_id
						}" data-date="${getFormattedDate(j)}" value="">
							</div>
						</td>
					`)
					}
				}

				$(".table2__body-internal").append(
					'<tr class="table2__row table2__row_height_md js-table2__row-internal"></tr>'
				)

				for (let i = 0; i < $(".js-table2__row__sauna").length + 1; i++) {
					for (let j = 0; j < 8; j++) {
						let dayOfTheWeek
						switch (j) {
							case 0:
								dayOfTheWeek = "monday"
								break
							case 1:
								dayOfTheWeek = "tuesday"
								break
							case 2:
								dayOfTheWeek = "wednesday"
								break
							case 3:
								dayOfTheWeek = "thursday"
								break
							case 4:
								dayOfTheWeek = "friday"
								break
							case 5:
								dayOfTheWeek = "saturday"
								break
							case 6:
								dayOfTheWeek = "sunday"
								break
							case 7:
								dayOfTheWeek = "allDays"
						}
						if (i === 0) {
							$($(".js-table2__row-internal")[i]).append(`
						<td class="table2__cell m-price">
							<div class="table2__price">
								<input style="display: flex;" type="number" name="price-period[${i}][${j}]" class="table2__input m-third status m-green-light" data-week="${dayOfTheWeek}" data-category-period="allCategories" value="">
							</div>
						</td>
						`)
						} else {
							$($(".js-table2__row-internal")[i]).append(`
						<td class="table2__cell m-price">
							<div class="table2__price">
								<input style="display: flex;" type="number" name="price-period[${i}][${j}]" class="table2__input m-third status m-green-light" data-week="${dayOfTheWeek}" data-category-period="${
								saunaCategoriesData[i - 1].category_id
							}" value="">
							</div>
						</td>
						`)
						}
					}
				}

				$("#leftSideBarSauna").append(res)
				$("#leftSideBarSaunaInternal").append(res)
			}

			function getTariffsCottageList(hotelTariffs) {
				let res = ``
				hotelTariffs.forEach((item) => {
					res += `
					<div class="tariffs-cottage-list__container entity-list">
						<p class="tariffs-cottage-list__item" data-id="${item.tariff_id}">${item.name}</p>
						<p class="tariffs-cottage-list__item edit" id="editTariff" data-link="hotel" data-id="${item.tariff_id}">[Редактировать]</p>
						<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/settings/delete.png" class="deleteTrash categories-cottage-list__item" id="deleteTariffItemCottage" data-id="${item.tariff_id}"></img>
					</div>
				`
				})
				return res
			}

			function getTariffsSaunaList(bathhouseTariffs) {
				let res = ``
				bathhouseTariffs.forEach((item) => {
					res += `
					<div class="tariffs-cottage-list__container entity-list">
						<p class="tariffs-cottage-list__item" data-id="${item.tariff_id}">${item.name}</p>
						<p class="tariffs-cottage-list__item edit" id="editTariffSauna" data-link="bathhouse" data-id="${item.tariff_id}">[Редактировать]</p>
						<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/settings/delete.png" class="deleteTrash categories-cottage-list__item" id="deleteTariffItemSauna" data-id="${item.tariff_id}"></img>
					</div>
				`
				})
				return res
			}

			//Логика для изменить цены на период
			$("body").on(
				"change",
				'.table2__input[data-category-period="allCategories"]',
				function () {
					if ($(this).attr("data-week") != "allDays") {
						let value = $(this).val()
						let dayWeek = $(this).attr("data-week")
						$(`.table2__input[data-week=${dayWeek}]`).each(function () {
							$(this).val(value)
						})
					}
				}
			)

			$("body").on(
				"change",
				'.table2__input[data-week="allDays"]',
				function () {
					if ($(this).attr("data-category-period") != "allCategories") {
						let value = $(this).val()
						let category = $(this).attr("data-category-period")
						$(`.table2__input[data-category-period=${category}]`).each(
							function () {
								$(this).val(value)
							}
						)
					}
				}
			)

			let res = `
		<div class="navbar-internal">
			<div class="cottages__nav active" data-link="cottages">Коттеджи</div>
			<div class="sauna__nav" data-link="sauna">Сауна</div>
		</div>
		<div class="wrap-entity-internal">
			<div class="cottages__entity-internal">
				<div class="tariffs-cottage-list">${hotelTariffs != '' ? getTariffsCottageList(hotelTariffs) : ''}</div>
				<div class="button-input" id="addTariff" data-link="-tarif-cottage">Добавить тариф</div>
				<div class="overlay js-overlay-tarif-cottage">
					<div class="popup js-popup-tarif-cottage">
					<form action="#" method="post" id="tariffFormCottage" class="form-tariff" accept-charset="utf-8">
						<div class="close-popup js-close-popup-tarif-cottage">&#10006;</div>
							<label for="name">
								Название тарифа:&nbsp;
								<input align="right" type="text" class="text-input title-tariff-input _req" name="name" placeholder="Введите текст">
							</label>
							<div class="table2 m-dark-border table2_near-dependent">
								<div class="table2__sidebar" style="margin-left: 0px;">
									<div class="table2__corner table2__fixed">
										<span>Категории номеров</span>
									</div>
									<div class="table2__fixedData m-dark-border" id="leftSideBarCottage">
				
									</div>
								</div>
								<div class="table2__layout">
									<div class="table2__head table2__fixed">
										<div class="grid m-table-cottage">
										
										</div>
										<div class="table2__data table2__fixedData">
											<table class="table2__table">
												<tbody class="table2__body__cottage">

												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</form>
						<div class="saved-container-cottage">
							<div class="button-input" id="saveTariffCottage">Сохранить</div>
						</div>
					</div>
				</div>
				<div class="overlay js-overlay-tarif-cottage-internal">
					<div class="popup js-popup-tarif-cottage-internal">
						<div class="close-popup js-close-popup-tarif-cottage-internal">&#10006;</div>
						<div class="form__period-cottage">
							<div class="form__period__item">
								<label for="from">
									<input class="date_field empty date-cottage _req" name="from" type="date" maxlength="10" value placeholder="Выберите дату">
								</label>
								&nbsp;
								<span>—</span>
								&nbsp;
								<label for="to">
									<input class="date_field empty date-cottage _req" name="to" type="date" maxlength="10" value placeholder="Выберите дату">
								</label>
							</div>
						</div>
						<div class="button-input period-btn" id="addPeriod" data-tariff="" data-link="hotel">Добавить период</div>
						<div class="table3 m-dark-border table2_near-dependent">
							<div class="table3__sidebar m-dark-border" style="margin-left: 0px;">
								<div class="table3__corner table2__fixed">
									<span>Категории номеров</span>
								</div>
								<div class="table2__sidecell table2__sidecell_height_md m-dark-border" title="allCategories">
									Все категории
								</div>
								<div class="table2__fixedData m-dark-border" id="leftSideBarCottageInternal">
							
								</div>
								<div class="table3__layout">
								<div class="table3__head table2__fixed">
									<div class="grid m-table-cottage-internal">
										<div class="table2__month">
											<div class="table2__dates">
												<span class="table2__date">пн</span>
											</div>
											<div class="table2__dates">
												<span class="table2__date">вт</span>
											</div>
											<div class="table2__dates">
												<span class="table2__date">ср</span>
											</div>
											<div class="table2__dates">
												<span class="table2__date">чт</span>
											</div>
											<div class="table2__dates">
												<span class="table2__date">пт</span>
											</div>
											<div class="table2__dates">
												<span class="table2__date">сб</span>
											</div>
											<div class="table2__dates">
												<span class="table2__date">вс</span>
											</div>
											<div class="table2__dates">
												<span class="table2__date">все дни</span>
											</div>
										</div>
									</div>
									<div class="table2__data table2__fixedData">
										<table class="table2__table">
											<tbody class="table2__body__cottage-internal">

											</tbody>
										</table>
									</div>
								</div>
							</div>
							</div>
						</div>
					</div>
				</div>
				<div class="overlay js-overlay-tariff-cottage-edit">
					<div class="popup js-popup-tariff-cottage-edit">
						
					</div>
				</div>
			</div>
			<div class="sauna__entity-internal hidden">
			<div class="tariffs-sauna-list">${getTariffsSaunaList(bathhouseTariffs)}</div>
				<div class="button-input" id="addTariff" data-link="-tarif-sauna">Добавить тариф</div>
				<div class="overlay js-overlay-tarif-sauna">
					<div class="popup js-popup-tarif-sauna">
						<form action="#" method="post" id="tariffFormSauna" class="form-tariff" accept-charset="utf-8">
							<div class="close-popup js-close-popup-tarif-sauna">&#10006;</div>
							<label for="name">
								Название тарифа:&nbsp;
								<input align="right" type="text" class="text-input title-tariff-input _req" name="name" placeholder="Введите текст">
							</label>
							<div class="table2 m-dark-border table2_near-dependent">
								<div class="table2__sidebar" style="margin-left: 0px;">
									<div class="table2__corner table2__fixed">
										<span>Категории номеров</span>
									</div>
									<div class="table2__fixedData m-dark-border" id="leftSideBarSauna">
				
									</div>
								</div>
								<div class="table2__layout">
									<div class="table2__head table2__fixed">
										<div class="grid m-table-sauna">
										
										</div>
										<div class="table2__data table2__fixedData">
											<table class="table2__table">
												<tbody class="table2__body__sauna">

												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</form>
						<div class="saved-container-sauna">
							<div class="button-input" id="saveTariffSauna">Сохранить</div>
						</div>
					</div>
				</div>
				<div class="overlay js-overlay-tarif-sauna-internal">
					<div class="popup js-popup-tarif-sauna-internal">
						<div class="close-popup js-close-popup-tarif-sauna-internal">&#10006;</div>
						<div class="form__period-sauna">
							<div class="form__period__item">
								<label for="from">
									<input class="date_field empty date-sauna _req" name="from" type="date" maxlength="10" value placeholder="Выберите дату">
								</label>
								&nbsp;
								<span>—</span>
								&nbsp;
								<label for="to">
									<input class="date_field empty date-sauna _req" name="to" type="date" maxlength="10" value placeholder="Выберите дату">
								</label>
							</div>
						</div>
						<div class="button-input period-btn" id="addPeriod" data-tariff="" data-link="bathhouse">Добавить период</div>
						<div class="table3 m-dark-border table2_near-dependent">
							<div class="table3__sidebar m-dark-border" style="margin-left: 0px;">
								<div class="table3__corner table2__fixed">
									<span>Категории номеров</span>
								</div>
								<div class="table2__sidecell table2__sidecell_height_md m-dark-border" title="allCategories">
									Все категории
								</div>
								<div class="table2__fixedData m-dark-border" id="leftSideBarSaunaInternal">
							
								</div>
								<div class="table3__layout">
								<div class="table3__head table2__fixed">
									<div class="grid m-table-sauna-internal">
										<div class="table2__month">
											<div class="table2__dates">
												<span class="table2__date">пн</span>
											</div>
											<div class="table2__dates">
												<span class="table2__date">вт</span>
											</div>
											<div class="table2__dates">
												<span class="table2__date">ср</span>
											</div>
											<div class="table2__dates">
												<span class="table2__date">чт</span>
											</div>
											<div class="table2__dates">
												<span class="table2__date">пт</span>
											</div>
											<div class="table2__dates">
												<span class="table2__date">сб</span>
											</div>
											<div class="table2__dates">
												<span class="table2__date">вс</span>
											</div>
											<div class="table2__dates">
												<span class="table2__date">все дни</span>
											</div>
										</div>
									</div>
									<div class="table2__data table2__fixedData">
										<table class="table2__table">
											<tbody class="table2__body__sauna-internal">

											</tbody>
										</table>
									</div>
								</div>
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`

			$(".price-tariffs__entity").append(res)

			getLeftSideBarSauna(saunaCategoriesData)
			getLeftSideBarCottage(cottageCategoriesData, saunaCategoriesData)
			getMonth(saunaCategoriesData, cottageCategoriesData)
		}

		async function editWindowCategoryBathhouse(categoryData, bathhouseTariffs) {
			$(".js-popup-edit-bathhouse").empty()
			console.log(categoryData[0]);
			categoryData[0].facilities = JSON.parse(categoryData[0].facilities)
			let tariffValue
			if (categoryData[0].tariff_id != 0) {
				await tariffInfo(categoryData[0].tariff_id, 'bathhouse').then(
					(data) => (tariffValue = data[0].name)
				).catch(
					() => (tariffValue = '')
				)
			}
			let res = `
			<div class="navbar-popup-sauna">
				<div class="desciption__nav navigation active" data-link="description-sauna">Описание</div>
				<div class="сonveniences__nav navigation" data-link="сonveniences-sauna">Удобства</div>
				<div class="photos__nav navigation" data-link="photos-sauna">Фотографии</div>
				<div class="time-block__nav navigation" data-link="time-block-sauna">Блокировка времени</div>
			</div>
			<div class="close-popup js-close-popup-edit-bathhouse">&#10006;</div>
			<form action="#" method="#" id="saunaEditForm">
				<div class="wrap-entity-popup-sauna">
					<div class="description-sauna__entity-popup-sauna">
						<label for="name">
						Название: 
						<div class="cont">
							<input type="text" name="name" data-id=""
								data-type=""
								value="${categoryData[0].name}" class="name__input text-input _req" placeholder="Введите текст"/>
							<div class="clear__btn active">&#x2716;</div>
						</div>
					</label>
					<label for="tariff_id__bathhouse-edit">
						Ценовой тариф: 
						<div class="cont">
							<input type="text" name="tariff_id__bathhouse-edit" data-id="${categoryData[0].tariff_id}"
								data-type=""
								value="${tariffValue != undefined ? tariffValue : ""}" class="tariff_id__bathhouse__input__edit text-input" placeholder="Выберите тариф" />
							<div class="clear__btn active">&#x2716;</div>
							${bathhouseTariffs != '' ? getTariffsList(bathhouseTariffs) : ''}
						</div>
					</label>
					<label for="time_start_work">
						Время начала работы 
						<div class="cont">
							<input type="time" name="time_start_work" data-id=""
								data-type=""
								value="${categoryData[0].time_start_work}" class="time_start_work__input text-input _req"/>
							<div class="clear__btn active">&#x2716;</div>
						</div>
					</label>
					<label for="time_end_work">
						Время окончания работы 
						<div class="cont">
							<input type="time" name="time_end_work" data-id=""
								data-type=""
								value="${categoryData[0].time_end_work}" class="time_end_work__input text-input _req"/>
							<div class="clear__btn active">&#x2716;</div>
						</div>
					</label>
					<label for="min_booking">
						Минимальная длительность(мин) 
						<div class="cont">
							<input type="time" name="min_booking" data-id=""
								data-type=""
								value="${categoryData[0].min_booking}" class="min_booking__input text-input _req" placeholder="Введите число"/>
							<div class="clear__btn active">&#x2716;</div>
						</div>
					</label>
					<label for="min_step">
						Минимальнимальный шаг между записями(мин) 
						<div class="cont">
							<input type="time" name="min_step" data-id=""
								data-type=""
								value="${categoryData[0].min_step}" class="min_step__input text-input _req" placeholder="Введите число"/>
							<div class="clear__btn active">&#x2716;</div>
						</div>
					</label>
					<label for="min_guests">
						Вместительность для цены по умолчанию 
						<div class="cont">
							<input type="number" name="min_guests" data-id=""
								data-type=""
								value="${categoryData[0].min_guests}" class="min_guests__input text-input" placeholder="Введите число"/>
							<div class="clear__btn active">&#x2716;</div>
						</div>
					</label>
					<label for="max_guests">
						Максимальная вместительность 
						<div class="cont">
							<input type="number" name="max_guests" data-id=""
								data-type=""
								value="${categoryData[0].max_guests}" class="max_guests__input text-input _req" placeholder="Введите число"/>
							<div class="clear__btn active">&#x2716;</div>
						</div>
					</label>
					<label for="description">
						Описание: 
						<div class="cont">
							<textarea class="text-input text-input-textarea description-textarea" name="description" placeholder="Добавьте описание">${categoryData[0].description}</textarea>
							<div class="clear__btn active">&#x2716;</div>
						</div>
					</label>
					<div class="button-input" data-id="${categoryData[0].category_id}" id="sendEditCategorySauna">Сохранить</div>
				</div>
				<div class="сonveniences-sauna__entity-popup-sauna hidden">
										<ul class="conveniences-list-sauna">
											<li class="conveniences-list-item">
												<label>
													<input type="checkbox" class="conveniences-group" data-ploshad="false" data-group-id="1">
													<span class="checkmark"></span>
													Вид парной
												</label>
												<ul class="conveniences-group-list" data-group="1">
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-ploshad="false"  data-item-id="1" ${categoryData[0].facilities[0].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/russian%20sauna:%20%d1%80%d1%83%d1%81%d1%81%d0%ba%d0%b0%20%d1%81%d0%b0%d1%83%d0%bd%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Русская баня
															<input class="conveniences_value" type="hidden" name="1-1" data-value-id="1" data-item-type="bool" value="${categoryData[0].facilities[0].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="2" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="2" ${categoryData[0].facilities[1].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/hamam:%d1%85%d0%b0%d0%bc%d0%b0%d0%bc.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Хамам
															<input class="conveniences_value" type="hidden" name="1-2" data-value-id="2" data-item-type="bool" value="${categoryData[0].facilities[1].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="3" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="3" ${categoryData[0].facilities[2].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/Finnish%20sauna:%d1%84%d0%b8%d0%bd%d1%81%d0%ba%d0%b0%d1%8f%20%d1%81%d0%b0%d1%83%d0%bd%d0%b0.png" class="conveniences-icon conveniences-icon__sauna"></img>
															Финская сауна
															<input class="conveniences_value" type="hidden" name="1-3" data-value-id="3" data-item-type="bool" value="${categoryData[0].facilities[2].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="4" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="4" ${categoryData[0].facilities[3].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/public%20bath:%d0%be%d0%b1%d1%89%d0%b5%d1%81%d1%82%d0%b2%d0%b5%d0%bd%d0%bd%d0%b0%d1%8f%20%d0%b1%d0%b0%d0%bd%d1%8f.png" class="conveniences-icon conveniences-icon__public-bath"></img>
															Общественная баня
															<input class="conveniences_value" type="hidden" name="1-4" data-value-id="4" data-item-type="bool" value="${categoryData[0].facilities[3].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="5" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="5" ${categoryData[0].facilities[4].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/infrared%20sauna:%d0%b8%d0%bd%d1%84%d1%80%d0%b0%d0%ba%d1%80%d0%b0%d1%81%d0%bd%d0%b0%d1%8f%20%d1%81%d0%b0%d1%83%d0%bd%d0%b0.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Инфракрасная сауна
															<input class="conveniences_value" type="hidden" name="1-5" data-value-id="5" data-item-type="bool" value="${categoryData[0].facilities[4].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="6" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="6" ${categoryData[0].facilities[5].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/wood-fired%20sauna:%d0%b1%d0%b0%d0%bd%d1%8f%20%d0%bd%d0%b0%20%d0%b4%d1%80%d0%be%d0%b2%d0%b0%d1%85.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Баня на дровах
															<input class="conveniences_value" type="hidden" name="1-6" data-value-id="6" data-item-type="bool" value="${categoryData[0].facilities[5].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="7" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="7" ${categoryData[0].facilities[6].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/Japanese%20bath:%d1%8f%d0%bf%d0%be%d0%bd%d0%ba%d0%b0%d1%8f%20%d0%b1%d0%b0%d0%bd%d1%8f.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Японская баня
															<input class="conveniences_value" type="hidden" name="1-7" data-value-id="7" data-item-type="bool" value="${categoryData[0].facilities[6].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="8" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="8" ${categoryData[0].facilities[7].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/Roman%20bath:%d1%80%d0%b8%d0%bc%d1%81%d0%ba%d0%b0%d1%8f%20%d0%b1%d0%b0%d0%bd%d1%8f.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Римская баня
															<input class="conveniences_value" type="hidden" name="1-8" data-value-id="8" data-item-type="bool" value="${categoryData[0].facilities[7].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="9" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="9" ${categoryData[0].facilities[8].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/cryosauna:%d0%ba%d1%80%d0%b8%d0%be%d1%81%d0%b0%d1%83%d0%bd%d0%b0.png"></img>
															Криосауна
															<input class="conveniences_value" type="hidden" name="1-9" data-value-id="9" data-item-type="bool" value="${categoryData[0].facilities[8].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="10" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="10" ${categoryData[0].facilities[9].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/phytosauna:%d1%84%d0%b8%d1%82%d0%be%d1%81%d0%b0%d1%83%d0%bd%d0%b0.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Фитосауна
															<input class="conveniences_value" type="hidden" name="1-10" data-value-id="10" data-item-type="bool" value="${categoryData[0].facilities[9].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="11" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="11" ${categoryData[0].facilities[10].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/salt%20room:%d1%81%d0%be%d0%bb%d1%8f%d0%bd%d0%b0%d1%8f%20%d0%ba%d0%be%d0%bc%d0%bd%d0%b0%d1%82%d0%b0.png"></img>
															Соляная комната
															<input class="conveniences_value" type="hidden" name="1-11" data-value-id="11" data-item-type="bool" value="${categoryData[0].facilities[10].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="12" ${categoryData[0].facilities[11].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/mobile%20bath:%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d1%8c%d0%bd%d0%b0%d1%8f%20%d0%b1%d0%b0%d0%bd%d1%8f.png"></img>
															Мобильная баня
															<input class="conveniences_value" type="hidden" name="1-12" data-value-id="12" data-item-type="bool" value="${categoryData[0].facilities[11].on}" size="4" min="0">
														</label>
													</li>
												</ul>
											</li>

											<li class="conveniences-list-item">
												<label>
													<input type="checkbox" class="conveniences-group" data-group-id="2">
													<span class="checkmark"></span>
													Аквазона
												</label>
												<ul class="conveniences-group-list" data-group="2">
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="13" ${categoryData[0].facilities[12].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/swimming%20pool:%d0%b1%d0%b0%d1%81%d1%81%d0%b5%d0%b8%cc%86%d0%bd.png" class="conveniences-icon conveniences-icon__russian"></img>
															Бассейн
															<input class="conveniences_value" type="hidden" name="2-1" data-value-id="13" data-item-type="bool" value="${categoryData[0].facilities[12].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="2" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="14" ${categoryData[0].facilities[13].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/Jacuzzi:%d0%b4%d0%b6%d0%b0%d0%ba%d1%83%d0%b7%d0%b8.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Джакузи
															<input class="conveniences_value" type="hidden" name="2-2" data-value-id="14" data-item-type="bool" value="${categoryData[0].facilities[13].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="3" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="15" ${categoryData[0].facilities[14].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/waterfall:%d0%b2%d0%be%d0%b4%d0%be%d0%bf%d0%b0%d0%b4.png" class="conveniences-icon conveniences-icon__sauna"></img>
															Водопад
															<input class="conveniences_value" type="hidden" name="2-3" data-value-id="15" data-item-type="bool" value="${categoryData[0].facilities[14].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="4" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="16" ${categoryData[0].facilities[15].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/access%20to%20the%20river:lake:%d0%b2%d1%8b%d1%85%d0%be%d0%b4%20%d0%ba%20%d1%80%d0%b5%d0%ba%d0%b5:%d0%be%d0%b7%d0%b5%d1%80%d1%83.png" class="conveniences-icon conveniences-icon__public-bath"></img>
															Выход к реке/озеру
															<input class="conveniences_value" type="hidden" name="2-4" data-value-id="16" data-item-type="bool" value="${categoryData[0].facilities[15].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="5" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="17" ${categoryData[0].facilities[16].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/geyser:%d0%b3%d0%b5%d0%b8%cc%86%d0%b7%d0%b5%d1%80.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Гейзер
															<input class="conveniences_value" type="hidden" name="2-5" data-value-id="17" data-item-type="bool" value="${categoryData[0].facilities[16].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="6" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="18" ${categoryData[0].facilities[17].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/hydromassage:%d0%b3%d0%b8%d0%b4%d1%80%d0%be%d0%bc%d0%b0%d1%81%d1%81%d0%b0%d0%b6.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Гидромассаж
															<input class="conveniences_value" type="hidden" name="2-6" data-value-id="18" data-item-type="bool" value="${categoryData[0].facilities[17].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="7" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="19" ${categoryData[0].facilities[18].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/slide:%d0%b3%d0%be%d1%80%d0%ba%d0%b0.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Горка
															<input class="conveniences_value" type="hidden" name="2-7" data-value-id="19" data-item-type="bool" value="${categoryData[0].facilities[18].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="8" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="20" ${categoryData[0].facilities[19].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/shower:%d0%b4%d1%83%d1%88.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Душ
															<input class="conveniences_value" type="hidden" name="2-8" data-value-id="20" data-item-type="bool" value="${categoryData[0].facilities[19].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="9" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="21" ${categoryData[0].facilities[20].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/font:%d0%ba%d1%83%d0%bf%d0%b5%d0%bb%d1%8c.png"></img>
															Купель
															<input class="conveniences_value" type="hidden" name="2-9" data-value-id="21" data-item-type="bool" value="${categoryData[0].facilities[20].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="10" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="22" ${categoryData[0].facilities[21].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/ice%20pool:%d0%bb%d0%b5%d0%b4%d1%8f%d0%bd%d0%be%d0%b8%cc%86%20%d0%b1%d0%b0%d1%81%d1%81%d0%b5%d0%bd.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Ледяной бассейн
															<input class="conveniences_value" type="hidden" name="2-10" data-value-id="22" data-item-type="bool" value="${categoryData[0].facilities[21].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="11" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="23" ${categoryData[0].facilities[22].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/no%20swimming%20pool:%d0%bd%d0%b5%d1%82%20%d0%b1%d0%b0%d1%81%d1%81%d0%b5%d0%b8%cc%86%d0%bd%d0%b0.png"></img>
															Нет бассейна
															<input class="conveniences_value" type="hidden" name="2-11" data-value-id="23" data-item-type="bool" value="${categoryData[0].facilities[22].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="24" ${categoryData[0].facilities[23].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/backlight:%d0%bf%d0%be%d0%b4%d1%81%d0%b2%d0%b5%d1%82%d0%ba%d0%b0.png"></img>
															Подсветка
															<input class="conveniences_value" type="hidden" name="2-12" data-value-id="24" data-item-type="bool" value="${categoryData[0].facilities[23].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="25" ${categoryData[0].facilities[24].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/countercurrent:%d0%bf%d1%80%d0%be%d1%82%d0%b8%d0%b2%d0%be%d1%82%d0%be%d0%ba.png"></img>
															Противоток
															<input class="conveniences_value" type="hidden" name="2-13" data-value-id="25" data-item-type="bool" value="${categoryData[0].facilities[24].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="26" ${categoryData[0].facilities[25].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/sauna%20with%20sea%20water:%d1%81%d0%b0%d1%83%d0%bd%d0%b0%20%d1%81%20%d0%bc%d0%be%d1%80%d1%81%d0%ba%d0%be%d0%b8%cc%86%20%d0%b2%d0%be%d0%b4%d0%be%d0%b8%cc%86.png"></img>
															Сауна с морской водой
															<input class="conveniences_value" type="hidden" name="2-14" data-value-id="26" data-item-type="bool" value="${categoryData[0].facilities[25].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="27" ${categoryData[0].facilities[26].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/warm%20swimming%20pool:%d1%82%d0%b5%d0%bf%d0%bb%d1%8b%d0%b8%cc%86%20%d0%b1%d0%b0%d1%81%d1%81%d0%b5%d0%b8%cc%86%d0%bd.png"></img>
															Тёплый бассейн
															<input class="conveniences_value" type="hidden" name="2-15" data-value-id="27" data-item-type="bool" value="${categoryData[0].facilities[26].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="28" ${categoryData[0].facilities[27].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/tub:%d1%83%d1%88%d0%b0%d1%82.png"></img>
															Ушат
															<input class="conveniences_value" type="hidden" name="2-16" data-value-id="28" data-item-type="bool" value="${categoryData[0].facilities[27].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="29" ${categoryData[0].facilities[28].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/bath:%d0%b2%d0%b0%d0%bd%d0%bd%d0%b0.png"></img>
															Ванна
															<input class="conveniences_value" type="hidden" name="2-17" data-value-id="29" data-item-type="bool" value="${categoryData[0].facilities[28].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="30" ${categoryData[0].facilities[29].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/vat:%d1%87%d0%b0%d0%bd.png"></img>
															Чан
															<input class="conveniences_value" type="hidden" name="2-18" data-value-id="30" data-item-type="bool" value="${categoryData[0].facilities[29].on}" size="4" min="0">
														</label>
													</li>
												</ul>
											</li>
											<li class="conveniences-list-item">
												<label>
													<input type="checkbox" class="conveniences-group" data-group-id="3">
													<span class="checkmark"></span>
													Сервис
												</label>
												<ul class="conveniences-group-list" data-group="3">
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="31" ${categoryData[0].facilities[30].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/steam%20room%20fragrances:%d0%b0%d1%80%d0%be%d0%bc%d0%b0%d1%82%d1%8b%20%d0%b4%d0%bb%d1%8f%20%d0%bf%d0%b0%d1%80%d0%bd%d0%be%d0%b8%cc%86.png" class="conveniences-icon conveniences-icon__russian"></img>
															Ароматы для парной
															<input class="conveniences_value" type="hidden" name="3-1" data-value-id="31" data-item-type="bool" value="${categoryData[0].facilities[30].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="32" ${categoryData[0].facilities[31].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/Audio-video%20equipment:%d0%b0%d1%83%d0%b4%d0%b8%d0%be-%d0%b2%d0%b8%d0%b4%d0%b5%d0%be%20%d0%b0%d0%bf%d0%bf%d0%b0%d1%80%d0%b0%d1%82%d1%83%d1%80%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Аудио-видео аппаратура
															<input class="conveniences_value" type="hidden" name="3-2" data-value-id="32" data-item-type="bool" value="${categoryData[0].facilities[31].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="33" ${categoryData[0].facilities[32].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/banqueting%20hall:%d0%b1%d0%b0%d0%bd%d0%ba%d0%b5%d1%82%d0%bd%d1%8b%d0%b8%cc%86%20%d0%b7%d0%b0%d0%bb.png" class="conveniences-icon conveniences-icon__russian"></img>
															Банкетный зал
															<input class="conveniences_value" type="hidden" name="3-3" data-value-id="33" data-item-type="bool" value="${categoryData[0].facilities[32].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="34" ${categoryData[0].facilities[33].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/bath%20accessories:%d0%b1%d0%b0%d0%bd%d0%bd%d1%8b%d0%b5%20%d0%bf%d1%80%d0%b8%d0%bd%d0%b0%d0%b4%d0%bb%d0%b5%d0%b6%d0%bd%d0%be%d1%81%d1%82%d0%b8.png" class="conveniences-icon conveniences-icon__russian"></img>
															Банные принадлежности
															<input class="conveniences_value" type="hidden" name="3-4" data-value-id="34" data-item-type="bool" value="${categoryData[0].facilities[33].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="35" ${categoryData[0].facilities[34].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/bar:%d0%b1%d0%b0%d1%80.png" class="conveniences-icon conveniences-icon__russian"></img>
															Бар
															<input class="conveniences_value" type="hidden" name="3-5" data-value-id="35" data-item-type="bool" value="${categoryData[0].facilities[34].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="36" ${categoryData[0].facilities[35].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/free%20wifi:%d0%b1%d0%b5%d1%81%d0%bf%d0%bb%d0%b0%d1%82%d1%8b%d0%b8%cc%86%20%d0%b2%d0%b0%d0%b8%cc%86-%d1%84%d0%b0%d0%b8%cc%86.png" class="conveniences-icon conveniences-icon__russian"></img>
															Бесплатный Wi-Fi
															<input class="conveniences_value" type="hidden" name="3-6" data-value-id="36" data-item-type="bool" value="${categoryData[0].facilities[35].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="37" ${categoryData[0].facilities[36].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/brooms:%d0%b2%d0%b5%d0%bd%d0%b8%d0%ba%d0%b8.png" class="conveniences-icon conveniences-icon__russian"></img>
															Веники
															<input class="conveniences_value" type="hidden" name="3-7" data-value-id="37" data-item-type="bool" value="${categoryData[0].facilities[36].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="38" ${categoryData[0].facilities[37].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/hotel:%d0%b3%d0%be%d1%81%d1%82%d0%b8%d0%bd%d0%b8%d1%86%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Гостиница/гостевой дом
															<input class="conveniences_value" type="hidden" name="3-8" data-value-id="38" data-item-type="bool" value="${categoryData[0].facilities[37].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="39" ${categoryData[0].facilities[38].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/fireplace:%d0%ba%d0%b0%d0%bc%d0%b8%d0%bd.png" class="conveniences-icon conveniences-icon__russian"></img>
															Камин
															<input class="conveniences_value" type="hidden" name="3-9" data-value-id="39" data-item-type="bool" value="${categoryData[0].facilities[38].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="40" ${categoryData[0].facilities[39].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/room%20for%20an%20hour:%d0%ba%d0%be%d0%bc%d0%bd%d0%b0%d1%82%d0%b0%20%d0%bd%d0%b0%20%d1%87%d0%b0%d1%81.png" class="conveniences-icon conveniences-icon__russian"></img>
															Комната на час
															<input class="conveniences_value" type="hidden" name="3-10" data-value-id="40" data-item-type="bool" value="${categoryData[0].facilities[39].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="41" ${categoryData[0].facilities[40].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/restroom:%d0%ba%d0%be%d0%bc%d0%bd%d0%b0%d1%82%d0%b0%20%d0%be%d1%82%d0%b4%d1%8b%d1%85%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Комната отдыха
															<input class="conveniences_value" type="hidden" name="3-11" data-value-id="41" data-item-type="bool" value="${categoryData[0].facilities[40].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="42" ${categoryData[0].facilities[41].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/air%20conditioning:%d0%ba%d0%be%d0%bd%d0%b4%d0%b8%d1%86%d0%b8%d0%be%d0%bd%d0%b5%d1%80.png" class="conveniences-icon conveniences-icon__russian"></img>
															Кондиционер
															<input class="conveniences_value" type="hidden" name="3-12" data-value-id="42" data-item-type="bool" value="${categoryData[0].facilities[41].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="43" ${categoryData[0].facilities[42].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/room%20for%20an%20hour:%d0%ba%d0%be%d0%bc%d0%bd%d0%b0%d1%82%d0%b0%20%d0%bd%d0%b0%20%d1%87%d0%b0%d1%81.png" class="conveniences-icon conveniences-icon__russian"></img>
															Летняя веранда
															<input class="conveniences_value" type="hidden" name="3-13" data-value-id="43" data-item-type="bool" value="${categoryData[0].facilities[42].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="44" ${categoryData[0].facilities[43].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/brazier:%d0%bc%d0%b0%d0%bd%d0%b3%d0%b0%d0%bb.png" class="conveniences-icon conveniences-icon__russian"></img>
															Мангал
															<input class="conveniences_value" type="hidden" name="3-14" data-value-id="44" data-item-type="bool" value="${categoryData[0].facilities[43].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="45" ${categoryData[0].facilities[44].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/mansard:%d0%bc%d0%b0%d0%bd%d1%81%d0%b0%d0%bd%d0%b4%d1%80%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Мансарда
															<input class="conveniences_value" type="hidden" name="3-15" data-value-id="45" data-item-type="bool" value="${categoryData[0].facilities[44].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="46" ${categoryData[0].facilities[45].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/massage%20chair:%d0%bc%d0%b0%d1%81%d1%81%d0%b0%d0%b6%d0%bd%d0%be%d0%b5%20%d0%ba%d1%80%d0%b5%d1%81%d0%bb%d0%be.png" class="conveniences-icon conveniences-icon__russian"></img>
															Массажное кресло
															<input class="conveniences_value" type="hidden" name="3-16" data-value-id="46" data-item-type="bool" value="${categoryData[0].facilities[45].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="47" ${categoryData[0].facilities[46].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/parking:%d0%bf%d0%b0%d1%80%d0%ba%d0%be%d0%b2%d0%ba%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Парковка
															<input class="conveniences_value" type="hidden" name="3-17" data-value-id="47" data-item-type="bool" value="${categoryData[0].facilities[46].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="48" ${categoryData[0].facilities[47].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/with%20your%20food:%d1%81%d0%be%20%d1%81%d0%b2%d0%be%d0%b5%d0%b8%cc%86%20%d0%b5%d0%b4%d0%be%d0%b8%cc%86.png" class="conveniences-icon conveniences-icon__russian"></img>
															Со своей едой
															<input class="conveniences_value" type="hidden" name="3-18" data-value-id="48" data-item-type="bool" value="${categoryData[0].facilities[47].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="49" ${categoryData[0].facilities[48].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/solarium:%d1%81%d0%be%d0%bb%d1%8f%d1%80%d0%b8%d0%b8%cc%86.png" class="conveniences-icon conveniences-icon__russian"></img>
															Солярий
															<input class="conveniences_value" type="hidden" name="3-19" data-value-id="49" data-item-type="bool" value="${categoryData[0].facilities[48].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="50" ${categoryData[0].facilities[49].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/bath%20cap:%d1%88%d0%b0%d0%bf%d0%be%d1%87%d0%ba%d0%b0%20%d0%b4%d0%bb%d1%8f%20%d0%b1%d0%b0%d0%bd%d0%b8.png" class="conveniences-icon conveniences-icon__russian"></img>
															Шапочка для бани
															<input class="conveniences_value" type="hidden" name="3-20" data-value-id="50" data-item-type="bool" value="${categoryData[0].facilities[49].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="51" ${categoryData[0].facilities[50].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/strip%20podium:%d1%81%d1%82%d1%80%d0%b8%d0%bf%20%d0%bf%d0%be%d0%b4%d0%b8%d1%83%d0%bc.png" class="conveniences-icon conveniences-icon__russian"></img>
															Стрип-подиум
															<input class="conveniences_value" type="hidden" name="3-21" data-value-id="51" data-item-type="bool" value="${categoryData[0].facilities[50].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="52" ${categoryData[0].facilities[51].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/bathrobe:%d0%b1%d0%b0%d0%bd%d0%bd%d1%8b%d0%b8%cc%86%20%d1%85%d0%b0%d0%bb%d0%b0%d1%82.png" class="conveniences-icon conveniences-icon__russian"></img>
															Банный халат
															<input class="conveniences_value" type="hidden" name="3-22" data-value-id="52" data-item-type="bool" value="${categoryData[0].facilities[51].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="53" ${categoryData[0].facilities[52].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/bed:%d0%ba%d1%80%d0%be%d0%b2%d0%b0%d1%82%d1%8c.png" class="conveniences-icon conveniences-icon__russian"></img>
															Кровать
															<input class="conveniences_value" type="hidden" name="3-23" data-value-id="53" data-item-type="bool" value="${categoryData[0].facilities[52].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="54" ${categoryData[0].facilities[53].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/a%20massage%20table:%d0%bc%d0%b0%d1%81%d1%81%d0%b0%d0%b6%d0%bd%d1%8b%d0%b8%cc%86%20%d1%81%d1%82%d0%be%d0%bb.png" class="conveniences-icon conveniences-icon__russian"></img>
															Массажный стол
															<input class="conveniences_value" type="hidden" name="3-24" data-value-id="54" data-item-type="bool" value="${categoryData[0].facilities[53].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="55" ${categoryData[0].facilities[54].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%D0%A1%D0%B5%D1%80%D0%B2%D0%B8%D1%81/pole:%D1%88%D0%B5%D1%81%D1%82.png" class="conveniences-icon conveniences-icon__russian"></img>
															Шест
															<input class="conveniences_value" type="hidden" name="3-25" data-value-id="55" data-item-type="bool" value="${categoryData[0].facilities[54].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="56" ${categoryData[0].facilities[55].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/summer%20terrace:%d0%bb%d0%b5%d1%82%d0%bd%d1%8f%d1%8f%20%d0%b2%d0%b5%d1%80%d0%b0%d0%bd%d0%b4%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Летняя веранда
															<input class="conveniences_value" type="hidden" name="3-26" data-value-id="56" data-item-type="bool" value="${categoryData[0].facilities[55].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="57" ${categoryData[0].facilities[56].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/towel:%d0%bf%d0%be%d0%bb%d0%be%d1%82%d0%b5%d0%bd%d1%86%d0%b5.png"></img>
															Полотенце
															<input class="conveniences_value" type="hidden" name="3-27" data-value-id="57" data-item-type="bool" value="${categoryData[0].facilities[56].on}" size="4" min="0">
														</label>
													</li>
												</ul>
											</li>
											<li class="conveniences-list-item">
												<label>
													<input type="checkbox" class="conveniences-group" data-group-id="4">
													<span class="checkmark"></span>
													Услуги
												</label>
												<ul class="conveniences-group-list" data-group="4">
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="58" ${categoryData[0].facilities[57].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/water%20aerobics:%d0%b0%d0%ba%d0%b2%d0%b0%d0%b0%d1%8d%d1%80%d0%be%d0%b1%d0%b8%d0%ba%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Аквааэробика
															<input class="conveniences_value" type="hidden" name="4-1" data-value-id="58" data-item-type="bool" value="${categoryData[0].facilities[57].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="59" ${categoryData[0].facilities[58].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/dishes%20on%20the%20grill:%d0%b1%d0%bb%d1%8e%d0%b4%d0%b0%20%d0%bd%d0%b0%20%d0%bc%d0%b0%d0%bd%d0%b3%d0%b0%d0%bb%d0%b5.png" class="conveniences-icon conveniences-icon__russian"></img>
															Блюда на мангале
															<input class="conveniences_value" type="hidden" name="4-2" data-value-id="59" data-item-type="bool" value="${categoryData[0].facilities[58].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="60" ${categoryData[0].facilities[59].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/hookah:%d0%ba%d0%b0%d0%bb%d1%8c%d1%8f%d0%bd.png" class="conveniences-icon conveniences-icon__russian"></img>
															Кальян
															<input class="conveniences_value" type="hidden" name="4-3" data-value-id="60" data-item-type="bool" value="${categoryData[0].facilities[59].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="61" ${categoryData[0].facilities[60].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/kitchen:%d0%ba%d1%83%d1%85%d0%bd%d1%8f.png" class="conveniences-icon conveniences-icon__russian"></img>
															Кухня
															<input class="conveniences_value" type="hidden" name="4-4" data-value-id="61" data-item-type="bool" value="${categoryData[0].facilities[60].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="62" ${categoryData[0].facilities[61].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/massage:%d0%bc%d0%b0%d1%81%d1%81%d0%b0%d0%b6.png" class="conveniences-icon conveniences-icon__russian"></img>
															Массаж
															<input class="conveniences_value" type="hidden" name="4-5" data-value-id="62" data-item-type="bool" value="${categoryData[0].facilities[61].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="63" ${categoryData[0].facilities[62].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/spa%20salons:%d1%81%d0%bf%d0%b0%20%d1%81%d0%b0%d0%bb%d0%be%d0%bd%d1%8b.png" class="conveniences-icon conveniences-icon__russian"></img>
															СПА салоны
															<input class="conveniences_value" type="hidden" name="4-6" data-value-id="63" data-item-type="bool" value="${categoryData[0].facilities[62].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="64" ${categoryData[0].facilities[63].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/gym:%d1%82%d1%80%d0%b5%d0%bd%d0%b0%d0%b6%d0%b5%d1%80%d0%bd%d1%8b%d0%b8%cc%86%20%d0%b7%d0%b0%d0%bb.png" class="conveniences-icon conveniences-icon__russian"></img>
															Тренажерный зал
															<input class="conveniences_value" type="hidden" name="4-7" data-value-id="64" data-item-type="bool" value="${categoryData[0].facilities[63].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="65" ${categoryData[0].facilities[64].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/attendant%20services:%d1%83%d1%81%d0%bb%d1%83%d0%b3%d0%b8%20%d0%b1%d0%b0%d0%bd%d1%89%d0%b8%d0%ba%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Услуги банщика
															<input class="conveniences_value" type="hidden" name="4-8" data-value-id="65" data-item-type="bool" value="${categoryData[0].facilities[64].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="66" ${categoryData[0].facilities[65].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/fitness:%d1%84%d0%b8%d1%82%d0%bd%d0%b5%d1%81.png" class="conveniences-icon conveniences-icon__russian"></img>
															Фитнес
															<input class="conveniences_value" type="hidden" name="4-9" data-value-id="66" data-item-type="bool" value="${categoryData[0].facilities[65].on}" size="4" min="0">
														</label>
													</li>
												</ul>
											</li>
											<li class="conveniences-list-item">
												<label>
													<input type="checkbox" class="conveniences-group" data-group-id="5">
													<span class="checkmark"></span>
													Развлечения
												</label>
												<ul class="conveniences-group-list" data-group="5">
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="67" ${categoryData[0].facilities[66].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/air%20hockey:%d0%b0%d1%8d%d1%80%d0%be%d1%85%d0%be%d0%ba%d0%ba%d0%b5%d0%b8%cc%86.png" class="conveniences-icon conveniences-icon__russian"></img>
															Аэрохоккей
															<input class="conveniences_value" type="hidden" name="5-1" data-value-id="67" data-item-type="bool" value="${categoryData[0].facilities[66].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="68" ${categoryData[0].facilities[67].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/darts:%d0%b4%d0%b0%d1%80%d1%82%d1%81.png" class="conveniences-icon conveniences-icon__russian"></img>
															Дартс
															<input class="conveniences_value" type="hidden" name="5-2" data-value-id="68" data-item-type="bool" value="${categoryData[0].facilities[67].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="69" ${categoryData[0].facilities[68].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/playing%20cards:%d0%b8%d0%b3%d1%80%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5%20%d0%ba%d0%b0%d1%80%d1%82%d1%8b.png" class="conveniences-icon conveniences-icon__russian"></img>
															Игральные карты
															<input class="conveniences_value" type="hidden" name="5-3" data-value-id="69" data-item-type="bool" value="${categoryData[0].facilities[68].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="70" ${categoryData[0].facilities[69].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/karaoke:%d0%ba%d0%b0%d1%80%d0%b0%d0%be%d0%ba%d0%b5.png" class="conveniences-icon conveniences-icon__russian"></img>
															Караоке
															<input class="conveniences_value" type="hidden" name="5-4" data-value-id="70" data-item-type="bool" value="${categoryData[0].facilities[69].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="71" ${categoryData[0].facilities[70].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/musical%20apparatus:%d0%bc%d1%83%d0%b7%d0%ba%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b8%cc%86%20%d0%b0%d0%bf%d0%bf%d0%b0%d1%80%d0%b0%d1%82.png" class="conveniences-icon conveniences-icon__russian"></img>
															Музыкальный аппарат
															<input class="conveniences_value" type="hidden" name="5-5" data-value-id="71" data-item-type="bool" value="${categoryData[0].facilities[70].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="72" ${categoryData[0].facilities[71].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/backgammon:%d0%bd%d0%b0%d1%80%d0%b4%d1%8b.png" class="conveniences-icon conveniences-icon__russian"></img>
															Нарды
															<input class="conveniences_value" type="hidden" name="5-6" data-value-id="72" data-item-type="bool" value="${categoryData[0].facilities[71].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="73" ${categoryData[0].facilities[72].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/board%20games:%d0%bd%d0%b0%d1%81%d1%82%d0%be%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5%20%d0%b8%d0%b3%d1%80%d1%8b.png" class="conveniences-icon conveniences-icon__russian"></img>
															Настольные игры
															<input class="conveniences_value" type="hidden" name="5-7" data-value-id="73" data-item-type="bool" value="${categoryData[0].facilities[72].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="74" ${categoryData[0].facilities[73].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/table%20tennis:%d0%bd%d0%b0%d1%81%d1%82%d0%be%d0%bb%d1%8c%d0%bd%d1%8b%d0%b8%cc%86%20%d1%82%d0%b5%d0%bd%d0%bd%d0%b8%d1%81.png" class="conveniences-icon conveniences-icon__russian"></img>
															Настольный теннис
															<input class="conveniences_value" type="hidden" name="5-8" data-value-id="74" data-item-type="bool" value="${categoryData[0].facilities[73].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="75" ${categoryData[0].facilities[74].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/table%20football:%d0%bd%d0%b0%d1%81%d1%82%d0%be%d0%bb%d1%8c%d0%bd%d1%8b%d0%b8%cc%86%20%d1%84%d1%83%d1%82%d0%b1%d0%be%d0%bb.png" class="conveniences-icon conveniences-icon__russian"></img>
															Настольный футбол
															<input class="conveniences_value" type="hidden" name="5-9" data-value-id="75" data-item-type="bool" value="${categoryData[0].facilities[74].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="76" ${categoryData[0].facilities[75].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/table%20hockey:%d0%bd%d0%b0%d1%81%d1%82%d0%be%d0%bb%d1%8c%d0%bd%d1%8b%d0%b8%cc%86%20%d1%85%d0%be%d0%ba%d0%ba%d0%b5%d0%b8%cc%86.png" class="conveniences-icon conveniences-icon__russian"></img>
															Настольный хоккей
															<input class="conveniences_value" type="hidden" name="5-10" data-value-id="76" data-item-type="bool" value="${categoryData[0].facilities[75].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="77" ${categoryData[0].facilities[76].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/Pool%20american%20billiards:%d0%bf%d1%83%d0%bb%20%d0%b0%d0%bc%d0%b5%d0%b8%d0%ba%d0%b0%d0%bd%d1%81%d0%ba%d0%b8%d0%b8%cc%86%20%d0%b1%d0%b8%d0%bb%d1%8c%d1%8f%d1%80%d0%b4.png" class="conveniences-icon conveniences-icon__russian"></img>
															Пул американский бильярд
															<input class="conveniences_value" type="hidden" name="5-11" data-value-id="77" data-item-type="bool" value="${categoryData[0].facilities[76].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="78" ${categoryData[0].facilities[77].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/Russian%20billiards:%d1%80%d1%83%d1%81%d1%81%d0%ba%d0%b8%d0%b8%cc%86%20%d0%b1%d0%b8%d0%bb%d1%8c%d1%8f%d1%80%d0%b4.png" class="conveniences-icon conveniences-icon__russian"></img>
															Русский бильярд
															<input class="conveniences_value" type="hidden" name="5-12" data-value-id="78" data-item-type="bool" value="${categoryData[0].facilities[77].on}" size="4" min="0">
														</label>
													</li>
												</ul>
											</li>
											<li class="conveniences-list-item">
												<label>
													<input type="checkbox" class="conveniences-group" data-group-id="6">
													<span class="checkmark"></span>
													Вид на
												</label>
												<ul class="conveniences-group-list" data-group="6">
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="79" ${categoryData[0].facilities[78].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/city:%d0%b3%d0%be%d1%80%d0%be%d0%b4.png" class="conveniences-icon conveniences-icon__russian"></img>
															Город
															<input class="conveniences_value" type="hidden" name="6-1" data-value-id="79" data-item-type="bool" value="${categoryData[0].facilities[78].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="80" ${categoryData[0].facilities[79].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/courtyard:%d0%b4%d0%b2%d0%be%d1%80.png" class="conveniences-icon conveniences-icon__russian"></img>
															Двор
															<input class="conveniences_value" type="hidden" name="6-2" data-value-id="80" data-item-type="bool" value="${categoryData[0].facilities[79].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="81" ${categoryData[0].facilities[80].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/garden,%20forest:%d1%81%d0%b0%d0%b4,%d0%bb%d0%b5%d1%81.png" class="conveniences-icon conveniences-icon__russian"></img>
															Сад, лес
															<input class="conveniences_value" type="hidden" name="6-3" data-value-id="81" data-item-type="bool" value="${categoryData[0].facilities[80].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="82" ${categoryData[0].facilities[81].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/lake:%d0%be%d0%b7%d0%b5%d1%80%d0%be.png" class="conveniences-icon conveniences-icon__russian"></img>
															Озеро
															<input class="conveniences_value" type="hidden" name="6-4" data-value-id="82" data-item-type="bool" value="${categoryData[0].facilities[81].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="83" ${categoryData[0].facilities[82].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/mountains:%d0%b3%d0%be%d1%80%d1%8b.png" class="conveniences-icon conveniences-icon__russian"></img>
															Горы
															<input class="conveniences_value" type="hidden" name="6-5" data-value-id="83" data-item-type="bool" value="${categoryData[0].facilities[82].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="84" ${categoryData[0].facilities[83].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/" class="conveniences-icon conveniences-icon__russian"></img>
															Река
															<input class="conveniences_value" type="hidden" name="6-6" data-value-id="84" data-item-type="bool" value="${categoryData[0].facilities[83].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="85" ${categoryData[0].facilities[84].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/sea:%d0%bc%d0%be%d1%80%d0%b5.png" class="conveniences-icon conveniences-icon__russian"></img>
															Море
															<input class="conveniences_value" type="hidden" name="6-7" data-value-id="85" data-item-type="bool" value="${categoryData[0].facilities[84].on}" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="86" ${categoryData[0].facilities[85].on == 'true' ? 'checked' : ''}>
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/swimming%20pool:%d0%b1%d0%b0%d1%81%d1%81%d0%b8%cc%86%d0%bd.png" class="conveniences-icon conveniences-icon__russian"></img>
															Бассейн
															<input class="conveniences_value" type="hidden" name="6-8" data-value-id="86" data-item-type="bool" value="${categoryData[0].facilities[85].on}" size="4" min="0">
														</label>
													</li>
												</ul>
											</li>
										</ul>
									</div>
				<div class="photos-sauna__entity-popup-sauna hidden">
					<div class="form__item">
						<div class="form__label">Фотографии сауны</div> 
						<div id="formPreviewSauna" class="form__preview"></div>
						<div class="file">
							<div class="file__item">
								<input id="formImageSauna" accept=".jpg, .png" type="file" name="image" class="file__input">
								<p class="form__limitations">Максимум 11 изображений в формате JPG или PNG и объёмом не более 6МБ</p> 
							</div>
						</div>
					</div>
				</div>
				<div class="time-block-sauna__entity-popup-sauna hidden">
					<label for="blocked_periods">
						Есть заблокированные временные промежутки 
						<div class="cont">
							<input type="checkbox" name="blocked_periods" data-id=""
								data-type=""
								value="" id="blockTimeIntervalsEdit" class="blocked_periods__input checkbox-input"/>
						</div>
					</label>
					<p class="form__limitations">Используется для тех случаев, когда необходимо выделить промежуток как санитарный, либо если Вы хотите чтобы временной промежуток был доступен только для тех, кто бронирует ещё и коттедж</p>
					<div class="time-block-wrap-edit"></div>
					<div class="button-input hidden" id="addTimeBlockEdit">Добавить</div>
				</div>
			</div>
		</form>
		`

			$('.js-popup-edit-bathhouse').append(res)
		}

		function getLeftSideBarCottageEdit(cottageCategoriesData, tariffData) {
			function getDaysInMonth(year, month) {
				return new Date(year, month, 0).getDate()
			}

			function getFormattedDate(j) {
				let daysInCurrentMonth = getDaysInMonth(new Date().getFullYear(), new Date().getMonth() + 1)

				let date = new Date()
				let currentMonth = date.getMonth() + 1
				let currentDate = new Date().getDate()
				currentDate = currentDate + j
				if(currentDate > daysInCurrentMonth) {
					currentMonth = currentMonth + 1
				}

				let str = date.getFullYear() + "-" + (currentMonth >= 10 ? currentMonth : '0' + String(currentMonth)) + "-" + (currentDate > daysInCurrentMonth ? $($('.table2__date')[j + 8]).attr('data-day') : currentDate)
				return str
			}

			let res = ``
			cottageCategoriesData.forEach((item) => {
				res += `
				<div class="table2__sidecell table2__sidecell_height_md m-dark-border" title="${item.name}">
					${item.name}
				</div>
			`
				$(".table2__body__cottage-edit").append(
					'<tr class="table2__row table2__row_height_md js-table2__row__cottage-edit"></tr>'
				)
				$(".table2__body__cottage-edit-internal").append(
					'<tr class="table2__row table2__row_height_md js-table2__row__cottage-edit-internal"></tr>'
				)
			})

			for (let i = 0; i < $(".js-table2__row__cottage-edit").length; i++) {
				for (let j = 0; j < 30; j++) {
					$($(".js-table2__row__cottage-edit")[i]).append(`
					<td class="table2__cell m-price">
						<div class="table2__price">
							<input style="display: flex;" type="number" name="price[${i}][${j}]" class="table2__input table2__input-edit m-third status m-green-light" data-category="${
						cottageCategoriesData[i].category_id
					}" data-date="${getFormattedDate(j)}" value="">
						</div>
					</td>
					`)
					tariffData.forEach(function(item) {
						if($(`.table2__input-edit[name="price[${i}][${j}]"]`).attr('data-category') == item.category_id) {
							if($(`.table2__input-edit[name="price[${i}][${j}]"]`).attr('data-date') == item.date) {
								$(`.table2__input-edit[name="price[${i}][${j}]"]`).val(item.price)
							}
						}
					})
				}
			}

			$(".table2__body__cottage-edit-internal").append(
				'<tr class="table2__row table2__row_height_md js-table2__row__cottage-edit-internal"></tr>'
			)

			for (let i = 0; i < $(".js-table2__row__cottage-edit").length + 1; i++) {
				for (let j = 0; j < 8; j++) {
					let dayOfTheWeek
					switch (j) {
						case 0:
							dayOfTheWeek = "monday"
							break
						case 1:
							dayOfTheWeek = "tuesday"
							break
						case 2:
							dayOfTheWeek = "wednesday"
							break
						case 3:
							dayOfTheWeek = "thursday"
							break
						case 4:
							dayOfTheWeek = "friday"
							break
						case 5:
							dayOfTheWeek = "saturday"
							break
						case 6:
							dayOfTheWeek = "sunday"
							break
						case 7:
							dayOfTheWeek = "allDays"
					}
					if (i === 0) {
						$($(".js-table2__row__cottage-edit-internal")[i]).append(`
					<td class="table2__cell m-price">
						<div class="table2__price">
							<input style="display: flex;" type="number" name="price-period[${i}][${j}]" class="table2__input m-third status m-green-light" data-week="${dayOfTheWeek}" data-category-period="allCategories" value="">
						</div>
					</td>
					`)
					} else {
						$($(".js-table2__row__cottage-edit-internal")[i]).append(`
					<td class="table2__cell m-price">
						<div class="table2__price">
							<input style="display: flex;" type="number" name="price-period[${i}][${j}]" class="table2__input m-third status m-green-light" data-week="${dayOfTheWeek}" data-category-period="${cottageCategoriesData[i - 1].category_id}" value="">
						</div>
					</td>
					`)
					}
				}
			}

			$("#leftSideBarCottageEdit").append(res)
			$("#leftSideBarCottageEditInternal").append(res)
		}

		async function editWindowTariff(tariffData, idTariff) {
			$(".js-popup-tariff-cottage-edit").empty()

			function getMonth(cottageCategoriesData) {
				const days = [
					"Воскресенье",
					"Понедельник",
					"Вторник",
					"Среда",
					"Четверг",
					"Пятница",
					"Суббота",
				]

				function getDaysInMonth(year, month) {
					return new Date(year, month, 0).getDate()
				}

				let daysInCurrentMonth = getDaysInMonth(new Date().getFullYear(), new Date().getMonth() + 1)
				
				function getMonthForLayout() {
					year = new Date().getFullYear()
					month = new Date().getMonth() + 2
					return new Date(year, month, 0).toLocaleString("ru", {month: "long",})
				}


				function getDatesForLayout(counter) {
					const layoutDates = []
					let dayOfWeek = 1
					for (let i = 0; i < 30 - counter; i++) {
						let currentDate = 1
						currentDate = currentDate + i
						dayOfWeek = dayOfWeek + i
						if (dayOfWeek >= 7) {
							dayOfWeek = dayOfWeek % 7
						}

						layoutDates.push(`
						<div class="table2__dates">
							<span class="table2__date" data-day="${currentDate}">${currentDate}</span>
							<span class="table2__day">${days[dayOfWeek]}</span>
						</div>
					`)
					}
					let dates = layoutDates.join()

					if(cottageCategoriesData != '') {
						$(".m-table-cottage-edit").append(`
						<div class="table2__month">
							<div class="table2__month-header">
								${getMonthForLayout()}
							</div>
							${dates}
						</div>
						`)
					}
				}

				const layoutDates = []
				for (let i = 0; i < 30; i++) {
					let currentDate = new Date().getDate()
					currentDate = currentDate + i
					let dayOfWeek = new Date().getDay() + i
					if (dayOfWeek >= 7) {
						dayOfWeek = dayOfWeek % 7
					}
					if (currentDate > daysInCurrentMonth) {
						let dates = layoutDates.join()

						$(".m-table-cottage-edit").append(`
						<div class="table2__month">
							<div class="table2__month-header" data-month="${new Date().getMonth() + 1}">
								${new Date().toLocaleString("ru", {month: "long"})}
							</div>
							${dates}
						</div>
					`)
						getDatesForLayout(i)
						break
					}

					layoutDates.push(`
					<div class="table2__dates">
						<span class="table2__date" data-day="${currentDate}">${currentDate}</span>
						<span class="table2__day">${days[dayOfWeek]}</span>
					</div>
					`)
				}
			}

			let table = `
				<div class="close-popup js-close-popup-tariff-cottage-edit">&#10006;</div>
				<form action="#" method="post" id="tariffFormCottageEdit" class="form-tariff" accept-charset="utf-8">
					<label for="name">
						Название тарифа:&nbsp;
						<input align="right" type="text" class="text-input title-tariff-input _req" name="name" placeholder="Введите текст" value="${tariffData[0].name}">
					</label>
					<div class="button-input_blue change-price-for-period" data-tariff="${idTariff}" data-link="cottage" id="changePriceForPeriod">Изменить цены на период</div>
					<div class="table2 m-dark-border table2_near-dependent">
						<div class="table2__sidebar" style="margin-left: 0px;">
							<div class="table2__corner table2__fixed">
								<span>Категории номеров</span>
							</div>
							<div class="table2__fixedData m-dark-border" id="leftSideBarCottageEdit">

							</div>
						</div>
						<div class="table2__layout">
							<div class="table2__head table2__fixed">
								<div class="grid m-table-cottage-edit">
										
								</div>
								<div class="table2__data table2__fixedData">
									<table class="table2__table">
										<tbody class="table2__body__cottage-edit">

										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</form>
				<div class="saved-container-cottage">
					<div class="button-input" id="saveTariffCottageEdit">Сохранить</div>
				</div>
			`

			$('.js-popup-tariff-cottage-edit').append(table)

			await cottageCategories(AMOCRM.constant("account").id).then((data) => cottageCategoriesData = data)
			getMonth(cottageCategoriesData)
			getLeftSideBarCottageEdit(cottageCategoriesData, tariffData)

			tariffData.forEach(function(item) {
				$(".js-table2__row__cottage-edit.table2__input").each((j) => {
					console.log(j);
					if(item.category_id == $('.js-table2__row__cottage-edit.table2__input')[j].attr('data-category')) {
						console.log('hello');
						
						if(item.date == $('.js-table2__row__cottage-edit.table2__input')[j].attr('data-date')) {
							$('.js-table2__row__cottage-edit.table2__input')[j].prop('value', item.price)
							console.log($('.js-table2__row__cottage-edit.table2__input')[j].attr('data-date'));
						}
					}
				})
			})
		}

		async function editWindowCategory(categoryData, hotelTariffs) {
			$(".js-popup-edit").empty()
			categoryData[0].facilities = JSON.parse(categoryData[0].facilities)
			let tariffValue
			if (categoryData[0].tariff_id != 0) {
				await tariffInfo(categoryData[0].tariff_id, 'hotel').then(
					(data) => (tariffValue = data[0].name)
				).catch(
					() => (tariffValue = '')
				)
			}
			let res = `
		<div class="navbar-popup">
			<div class="desciption__nav navigation active" data-link="description">Описание</div>
			<div class="сonveniences__nav navigation" data-link="conveniences">Удобства</div>
			<div class="photos__nav navigation" data-link="photos">Фотографии</div>
		</div>
		<div class="close-popup js-close-popup-edit">&#10006;</div>
		<form action="#" method="#" id="cottageEditForm">
			<div class="wrap-entity-popup">
				<div class="description__entity-popup">
					<label for="name">
						Название: 
						<div class="cont">
							<input type="text" name="name" data-id=""
								data-type="" class="name__input text-input _req" placeholder="Введите текст" value="${
									categoryData[0].name
								}"/>
							<div class="clear__btn active">&#x2716;</div>
						</div>
					</label>
					<label for="max_guests">
						Вместительность: 
						<div class="cont">
							<input type="number" name="max_guests" data-id=""
								data-type="" class="max_guests__input text-input _req" placeholder="Введите число" value="${
									categoryData[0].max_guests
								}"/>
							<div class="clear__btn active">&#x2716;</div>
						</div>
					</label>
					<label for="extra_beds">
						Дополнительных мест: 
						<div class="cont">
							<input type="number" name="extra_beds" data-id=""
								data-type="" class="extra_beds__input text-input _req" placeholder="Введите число" value="${
									categoryData[0].extra_beds
								}"/>
							<div class="clear__btn active">&#x2716;</div>
						</div>
					</label>
					<label for="tariff_id__cottage">
						Ценовой тариф: 
						<div class="cont">
							<input type="text" name="tariff_id__cottage__edit" data-id="${categoryData[0].tariff_id}"
								data-type="" class="tariffs__input text-input" placeholder="Выберите тариф" value="${
									tariffValue != undefined ? tariffValue : ""
								}"/>
							<div class="clear__btn active">&#x2716;</div>
							${hotelTariffs != '' ? getTariffsList(hotelTariffs, categoryData[0].tariff_id) : ''}
						</div>
					</label>
					<label for="time_arrival">
						Время заезда
						<div class="cont">
							<input type="time" name="time_arrival" data-id=""
								data-type="" class="time_arrival__input text-input _req" placeholder="Выберите время" value="${
									categoryData[0].time_arrival
								}"/>
							<div class="clear__btn active">&#x2716;</div>
						</div>
					</label>
					<label for="time_departure">
						Время выезда
						<div class="cont">
							<input type="time" name="time_departure" data-id=""
								data-type="" class="time_departure__input text-input _req" placeholder="Выберите время" value="${
									categoryData[0].time_departure
								}"/>
							<div class="clear__btn active">&#x2716;</div>
						</div>
					</label>
					<label for="description">
						Описание: 
						<div class="cont">
							<textarea class="text-input text-input-textarea description-textarea" name="description" placeholder="Добавьте описание">${
								categoryData[0].description
							}</textarea>
							<div class="clear__btn active">&#x2716;</div>
						</div>
					</label>
					<div class="button-input" id="sendEditCategoryCottage" data-id="${categoryData[0].category_id}">Сохранить</div>
				</div>

				<div class="conveniences__entity-popup hidden">
					<ul class="conveniences-list">
						<li class="conveniences-list-item">
							<label>
								<input type="checkbox" class="conveniences-group" data-group-id="1">
									<span class="checkmark"></span>
									Оснащение номера и мебель 
								</label>
							<ul class="conveniences-group-list" data-group="1">
						<li>
							<label>
								<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="int" data-item-group="1" data-item-id="1" ${categoryData[0].facilities[0].on != 0 ? 'checked' : ''}>
									<span class="checkmark"></span>
									<i class="conveniences-icon conveniences-icon__ploshad"></i>
									Площадь
									<input class="text-input conveniences_value" type="number" name="1-1" data-value-id="1" data-item-type="int" value="${
										categoryData[0].facilities[0].on
									}" size="4" min="0" ${categoryData[0].facilities[0].on != 0 ? '' : 'hidden'}>
									m2
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="2" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="2" ${categoryData[0].facilities[1].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__kondicioner"></i>
								Кондиционирование/Система климат-контроля
								<input class="conveniences_value" type="hidden" name="1-2" data-value-id="2" data-item-type="bool" value="${
									categoryData[0].facilities[1].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="3" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="3" ${categoryData[0].facilities[2].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__obogrevatel"></i>
								Обогреватель
								<input class="conveniences_value" type="hidden" name="1-3" data-value-id="3" data-item-type="bool" value="${
									categoryData[0].facilities[2].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="4" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="4" ${categoryData[0].facilities[3].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__ventilator"></i>
								Вентилятор
								<input class="conveniences_value" type="hidden" name="1-4" data-value-id="4" data-item-type="bool" value="${
									categoryData[0].facilities[3].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="5" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="5" ${categoryData[0].facilities[4].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__camin"></i>
								Камин
								<input class="conveniences_value" type="hidden" name="1-5" data-value-id="5" data-item-type="bool" value="${
									categoryData[0].facilities[4].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="6" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="6" ${categoryData[0].facilities[5].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__safe"></i>
								Сейф
								<input class="conveniences_value" type="hidden" name="1-6" data-value-id="6" data-item-type="bool" value="${
									categoryData[0].facilities[5].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="7" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="7" ${categoryData[0].facilities[6].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__telephone"></i>
								Телефон
								<input class="conveniences_value" type="hidden" name="1-7" data-value-id="7" data-item-type="bool" value="${
									categoryData[0].facilities[6].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="8" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="8" ${categoryData[0].facilities[7].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__work-zone"></i>
								Рабочее пространство
								<input class="conveniences_value" type="hidden" name="1-8" data-value-id="8" data-item-type="bool" value="${
									categoryData[0].facilities[7].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="9" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="9" ${categoryData[0].facilities[8].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__utug"></i>
								Утюг
								<input class="conveniences_value" type="hidden" name="1-9" data-value-id="9" data-item-type="bool" value="${
									categoryData[0].facilities[8].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="10" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="10" ${categoryData[0].facilities[9].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__wardrobe"></i>
								Шкаф/Гардероб
								<input class="conveniences_value" type="hidden" name="1-10" data-value-id="10" data-item-type="bool" value="${
									categoryData[0].facilities[9].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="11" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="11" ${categoryData[0].facilities[10].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__pillows"></i>
								Дополнительные подушки и одеяла
								<input class="conveniences_value" type="hidden" name="1-11" data-value-id="11" data-item-type="bool" value="${
									categoryData[0].facilities[10].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="12" ${categoryData[0].facilities[11].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__mosquito"></i>
								Москитная сетка
								<input class="conveniences_value" type="hidden" name="1-12" data-value-id="12" data-item-type="bool" value="${
									categoryData[0].facilities[11].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="13" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="13" ${categoryData[0].facilities[12].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__light-tight"></i>
								Светонепроницаемые шторы
								<input class="conveniences_value" type="hidden" name="1-13" data-value-id="13" data-item-type="bool" value="${
									categoryData[0].facilities[12].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="14" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="14" ${categoryData[0].facilities[13].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__baby-cot"></i>
								Детская кроватка
								<input class="conveniences_value" type="hidden" name="1-14" data-value-id="14" data-item-type="bool" value="${
									categoryData[0].facilities[13].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="15" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="15" ${categoryData[0].facilities[14].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__balcony"></i>
								Балкон
								<input class="conveniences_value" type="hidden" name="1-15" data-value-id="15" data-item-type="bool" value="${
									categoryData[0].facilities[14].on
								}" size="4" min="0">
							</label>
						</li>
					</ul>
				</li>

				<li class="conveniences-list-item">
					<label>
						<input type="checkbox" class="conveniences-group" data-group-id="2">
						<span class="checkmark"></span>
						Ванная комната
					</label>
					<ul class="conveniences-group-list" data-group="2">
						<li>
							<label>
								<input type="checkbox" value="16" class="conveniences-group-item"  data-item-type="int" data-item-group="2" data-item-id="16" ${categoryData[0].facilities[15].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__own-bathroom"></i>
								Собственный санузел
								<input class="conveniences_value" type="hidden" name="2-1" data-value-id="16" data-item-type="bool" value="${
									categoryData[0].facilities[15].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="17" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="17" ${categoryData[0].facilities[16].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__general-bathroom"></i>
								Общий санузел
								<input class="conveniences_value" type="hidden" name="2-2" data-value-id="17" data-item-type="bool" value="${
									categoryData[0].facilities[16].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="18" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="18" ${categoryData[0].facilities[17].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__jacuzzi"></i>
								Джакузи
								<input class="conveniences_value" type="hidden" name="2-3" data-value-id="18" data-item-type="bool" value="${
									categoryData[0].facilities[17].on
								}" size="4" min="0">
							</label>
					</li>
						<li>
							<label>
								<input type="checkbox" value="19" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="19" ${categoryData[0].facilities[18].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__bathrobes"></i>
								Халаты
								<input class="conveniences_value" type="hidden" name="2-4" data-value-id="19" data-item-type="bool" value="${
									categoryData[0].facilities[18].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="20" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="20" ${categoryData[0].facilities[19].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__slippers"></i>
								Тапочки
								<input class="conveniences_value" type="hidden" name="2-5" data-value-id="20" data-item-type="bool" value="${
									categoryData[0].facilities[19].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="21" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="21" ${categoryData[0].facilities[20].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__toiletries"></i>
								Туалетно-косметические принадлежности
								<input class="conveniences_value" type="hidden" name="2-6" data-value-id="21" data-item-type="bool" value="${
									categoryData[0].facilities[20].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="22" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="22" ${categoryData[0].facilities[21].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__bath"></i>
								Ванна
								<input class="conveniences_value" type="hidden" name="2-7" data-value-id="22" data-item-type="bool" value="${
									categoryData[0].facilities[21].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="23" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="23" ${categoryData[0].facilities[22].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__shower"></i>
								Душ
								<input class="conveniences_value" type="hidden" name="2-8" data-value-id="23" data-item-type="bool" value="${
									categoryData[0].facilities[22].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="24" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="24" ${categoryData[0].facilities[23].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__bidet"></i>
								Биде
								<input class="conveniences_value" type="hidden" name="2-9" data-value-id="24" data-item-type="bool" value="${
									categoryData[0].facilities[23].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="25" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="25" ${categoryData[0].facilities[24].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__fan"></i>
								Фен
								<input class="conveniences_value" type="hidden" name="2-10" data-value-id="25" data-item-type="bool" value="${
									categoryData[0].facilities[24].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="26" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="26" ${categoryData[0].facilities[25].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__drying"></i>
								Сушильная машина
								<input class="conveniences_value" type="hidden" name="2-11" data-value-id="26" data-item-type="bool" value="${
									categoryData[0].facilities[25].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="27" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="27" ${categoryData[0].facilities[26].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__washer"></i>
								Стиральная машина
								<input class="conveniences_value" type="hidden" name="2-12" data-value-id="27" data-item-type="bool" value="${
									categoryData[0].facilities[26].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="28" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="28" ${categoryData[0].facilities[27].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__swimming"></i>
								Бассейн
								<input class="conveniences_value" type="hidden" name="2-13" data-value-id="28" data-item-type="bool" value="${
									categoryData[0].facilities[27].on
								}" size="4" min="0">
							</label>
						</li>
					</ul>
				</li>

				<li class="conveniences-list-item">
					<label>
						<input type="checkbox" class="conveniences-group" data-group-id="3">
						<span class="checkmark"></span>
						Кухня
					</label>
					<ul class="conveniences-group-list" data-group="3">
						<li>
							<label>
								<input type="checkbox" value="29" class="conveniences-group-item"  data-item-type="int" data-item-group="3" data-item-id="29" ${categoryData[0].facilities[28].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__for-cooking"></i>
								Всё необходимое для приготовления еды
								<input class="conveniences_value" type="hidden" name="3-1" data-value-id="29" data-item-type="bool" value="${
									categoryData[0].facilities[28].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="30" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="30" ${categoryData[0].facilities[29].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__nuke"></i>
								Микроволновка
								<input class="conveniences_value" type="hidden" name="3-2" data-value-id="30" data-item-type="bool" value="${
									categoryData[0].facilities[29].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="31" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="31" ${categoryData[0].facilities[30].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__minibar"></i>
								Минибар
								<input class="conveniences_value" type="hidden" name="3-3" data-value-id="31" data-item-type="bool" value="${
									categoryData[0].facilities[30].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="32" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="32" ${categoryData[0].facilities[31].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__oven"></i>
								Духовка
								<input class="conveniences_value" type="hidden" name="3-4" data-value-id="32" data-item-type="bool" value="${
									categoryData[0].facilities[31].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="33" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="33" ${categoryData[0].facilities[32].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__fridge"></i>
								Холодильник
								<input class="conveniences_value" type="hidden" name="3-5" data-value-id="33" data-item-type="bool" value="${
									categoryData[0].facilities[32].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="34" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="34" ${categoryData[0].facilities[33].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__tableware"></i>
								Столовые приборы
								<input class="conveniences_value" type="hidden" name="3-6" data-value-id="34" data-item-type="bool" value="${
									categoryData[0].facilities[33].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="35" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="35" ${categoryData[0].facilities[34].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__toaster"></i>
								Тостер
								<input class="conveniences_value" type="hidden" name="3-7" data-value-id="35" data-item-type="bool" value="${
									categoryData[0].facilities[34].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="36" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="36" ${categoryData[0].facilities[35].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__dining-table"></i>
								Обеденный стол
								<input class="conveniences_value" type="hidden" name="3-8" data-value-id="36" data-item-type="bool" value="${
									categoryData[0].facilities[35].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="37" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="37" ${categoryData[0].facilities[36].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__cofe-tea"></i>
								Кофе/чай
								<input class="conveniences_value" type="hidden" name="3-9" data-value-id="37" data-item-type="bool" value="${
									categoryData[0].facilities[36].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="38" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="38" ${categoryData[0].facilities[37].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__cofemachine"></i>
								Кофемашина/Кофеварка
								<input class="conveniences_value" type="hidden" name="3-10" data-value-id="38" data-item-type="bool" value="${
									categoryData[0].facilities[37].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="39" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="39" ${categoryData[0].facilities[38].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__teapot"></i>
								Чайник
								<input class="conveniences_value" type="hidden" name="3-11" data-value-id="39" data-item-type="bool" value="${
									categoryData[0].facilities[38].on
								}" size="4" min="0">
							</label>
						</li>
					</ul>
				</li>

				<li class="conveniences-list-item">
					<label>
						<input type="checkbox" class="conveniences-group" data-group-id="4">
						<span class="checkmark"></span>
						Электроника и развлечения
					</label>
					<ul class="conveniences-group-list" data-group="4">
						<li>
							<label>
								<input type="checkbox" value="40" class="conveniences-group-item"  data-item-type="int" data-item-group="4" data-item-id="40" ${categoryData[0].facilities[39].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__tv"></i>
								Телевизор
								<input class="conveniences_value" type="hidden" name="4-1" data-value-id="40" data-item-type="bool" value="${
									categoryData[0].facilities[39].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="41" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="41" ${categoryData[0].facilities[40].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__cable-tv"></i>
								Кабельное ТВ
								<input class="conveniences_value" type="hidden" name="4-2" data-value-id="41" data-item-type="bool" value="${
									categoryData[0].facilities[40].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="42" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="42" ${categoryData[0].facilities[41].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__statellit-tv"></i>
								Спутниковое ТВ
								<input class="conveniences_value" type="hidden" name="4-3" data-value-id="42" data-item-type="bool" value="${
									categoryData[0].facilities[41].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="43" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="43" ${categoryData[0].facilities[42].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__sound-system"></i>
								Музыкальный проигрыватель/Звуковая система
								<input class="conveniences_value" type="hidden" name="4-4" data-value-id="43" data-item-type="bool" value="${
									categoryData[0].facilities[42].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="44" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="44" ${categoryData[0].facilities[43].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__wifi"></i>
								WiFi
								<input class="conveniences_value" type="hidden" name="4-5" data-value-id="44" data-item-type="bool" value="${
									categoryData[0].facilities[43].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="45" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="45" ${categoryData[0].facilities[44].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__wired-internet"></i>
								Проводное интернет-соединение
								<input class="conveniences_value" type="hidden" name="4-6" data-value-id="45" data-item-type="bool" value="${
									categoryData[0].facilities[44].on
								}" size="4" min="0">
							</label>
						</li>
					</ul>
				</li>

				<li class="conveniences-list-item">
					<label>
						<input type="checkbox" class="conveniences-group" data-group-id="5">
						<span class="checkmark"></span>
						Вид на
					</label>
					<ul class="conveniences-group-list" data-group="5">
						<li>
							<label>
								<input type="checkbox" value="46" class="conveniences-group-item"  data-item-type="int" data-item-group="5" data-item-id="46" ${categoryData[0].facilities[45].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__sea"></i>
								Море
								<input class="conveniences_value" type="hidden" name="5-1" data-value-id="46" data-item-type="bool" value="${
									categoryData[0].facilities[45].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="47" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="47" ${categoryData[0].facilities[46].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__lake"></i>
								Озеро
								<input class="conveniences_value" type="hidden" name="5-2" data-value-id="47" data-item-type="bool" value="${
									categoryData[0].facilities[46].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="48" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="48" ${categoryData[0].facilities[47].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__river"></i>
								Реку
								<input class="conveniences_value" type="hidden" name="5-3" data-value-id="48" data-item-type="bool" value="${
									categoryData[0].facilities[47].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="49" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="49" ${categoryData[0].facilities[48].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__mountains"></i>
								Горы
								<input class="conveniences_value" type="hidden" name="5-4" data-value-id="49" data-item-type="bool" value="${
									categoryData[0].facilities[48].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="50" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="50" ${categoryData[0].facilities[49].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__city"></i>
								Город
								<input class="conveniences_value" type="hidden" name="5-5" data-value-id="50" data-item-type="bool" value="${
									categoryData[0].facilities[49].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="51" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="51" ${categoryData[0].facilities[50].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__courtyard"></i>
								Внутренний двор
								<input class="conveniences_value" type="hidden" name="5-6" data-value-id="51" data-item-type="bool" value="${
									categoryData[0].facilities[50].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="52" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="52" ${categoryData[0].facilities[51].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__swimming"></i>
								Бассейн
								<input class="conveniences_value" type="hidden" name="5-7" data-value-id="52" data-item-type="bool" value="${
									categoryData[0].facilities[51].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="53" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="53" ${categoryData[0].facilities[52].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__forest"></i>
								Сад/Лес
								<input class="conveniences_value" type="hidden" name="5-8" data-value-id="53" data-item-type="bool" value="${
									categoryData[0].facilities[52].on
								}" size="4" min="0">
							</label>
						</li>
					</ul>
				</li>

				<li class="conveniences-list-item">
					<label>
						<input type="checkbox" class="conveniences-group" data-group-id="6">
						<span class="checkmark"></span>
						Услуги
					</label>
					<ul class="conveniences-group-list" data-group="6">
						<li>
							<label>
								<input type="checkbox" value="54" class="conveniences-group-item"  data-item-type="int" data-item-group="6" data-item-id="54" ${categoryData[0].facilities[53].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__luggage-storage"></i>
								Хранение багажа
								<input class="conveniences_value" type="hidden" name="6-1" data-value-id="54" data-item-type="bool" value="${
									categoryData[0].facilities[53].on
								}" size="4" min="0">
							</label>
						</li>
						<li>
							<label>
								<input type="checkbox" value="55" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="55" ${categoryData[0].facilities[54].on == 'true' ? 'checked' : ''}>
								<span class="checkmark"></span>
								<i class="conveniences-icon conveniences-icon__alarm"></i>
								Услуги будильника
								<input class="conveniences_value" type="hidden" name="6-2" data-value-id="55" data-item-type="bool" value="${
									categoryData[0].facilities[54].on
								}" size="4" min="0">
							</label>
						</li>
					</ul>
				</li>
			</ul>
			</div>
			</div>
		</form>
		`

			$(".js-popup-edit").append(res)
		}

		async function getAdvancedSettings(
			data,
			pipelines,
			bathhouseTariffs,
			hotelTariffs,
			cottageCategoriesData,
			saunaCategoriesData
		) {
			const fieldConstructor = (id, pipeId = "") => ({
				id: id,
				pipeId: pipeId,
				type: "",
			})

			function getSettingHtml(data, pipelines) {
				data = data.settings
				let dataEmpty = {
					fields: {
						price: fieldConstructor(""),
						objectName: fieldConstructor(""),
						arrivalDate: fieldConstructor(""),
						departureDate: fieldConstructor(""),
					},
				}
				if (!data) {
					data = dataEmpty
				}

				let statuses = data.statuses
					? data.statuses
					: {
							newBooking: fieldConstructor(""),
							bookingAccept: fieldConstructor(""),
							checkIn: fieldConstructor(""),
							checkOut: fieldConstructor(""),
							bookingCancelled: fieldConstructor(""),
					}

				const automationLangs = langs((data) => data.statuses)
				let html = ""
				for (let el of automationArr) {
					let status = statuses[el.key],
						statusName = findStatusName(status.id, status.pipeId)
					html += `
				<li class="auto-settings__list-el" data-id="${el.id}">
					<label for="status-${el.id}">
						${el.name}:
						<div class="cont">
							<input type="text" name="status_${el.id}" data-id="${
						status ? status.id : ""
					}" readonly
								value="${statusName}" data-pipe-id="${
						status ? status.pipeId : ""
					}"  class="status__input text-input"
								placeholder="Выберите этап"
							/>
							<div class="clear__btn ${statusName != "" ? "active" : ""}">&#x2716;</div>
							${getStatusList(pipelines)}
						</div>
					</label>
				</li>
				`
				}

				const fieldsLangs = langs((data) => data.fields)

				let res = `
			<form action="#" id="genrealSettingsForm">
				<div class="wrap-field">
					<div class="${w_code}-fields-lead block">
						<p class="title">${fieldsLangs.title}</p>
						${html}
					</div>
					
					<div class="${w_code}-fields-lead block">
						<p class="title">${fieldsLangs.secondTitle}</p>
						<label for="price">
							${fieldsLangs.price}:
							<div class="cont">
								<input type="text" name="price" data-id="${data.fields.price.id}" readonly
									data-type="${data.fields.price.type}"
									value="${findFieldName(
										data.fields.price.id,
										"leads"
									)}" class="price__input text-input _req" placeholder="${
					fieldsLangs.selectField
				}"
								/>
								<div class="clear__btn ${
									data.fields.price.id != "" ? "active" : ""
								}">&#x2716;</div>
								${getFieldsAmoList("text|number", "leads")}
							</div>
						</label>
						<label for="objectName">
							${fieldsLangs.objectName}:
							<div class="cont">
								<input type="text" name="objectName" data-id="${
									data.fields.objectName.id
								}" readonly
									data-type="${data.fields.objectName.type}"
									value="${findFieldName(
										data.fields.objectName.id,
										"leads"
									)}" class="objectName__input text-input _req" placeholder="${
					fieldsLangs.selectField
				}"
								/>
								<div class="clear__btn ${
									data.fields.objectName.id != "" ? "active" : ""
								}">&#x2716;</div>
								${getFieldsAmoList("text|number", "leads")}
							</div>
						</label>
						<label for="arrivalDate">
							${fieldsLangs.arrivalDate}:
							<div class="cont">
								<input type="text" name="arrivalDate" data-id="${
									data.fields.arrivalDate.id
								}" readonly
									data-type="${data.fields.arrivalDate.type}"
									value="${findFieldName(
										data.fields.arrivalDate.id,
										"leads"
									)}" class="arrivalDate__input text-input _req" placeholder="${
					fieldsLangs.selectField
				}"
								/>
								<div class="clear__btn ${
									data.fields.arrivalDate.id != "" ? "active" : ""
								}">&#x2716;</div>
								${getFieldsAmoList("text|number", "leads")}
							</div>
						</label>
						<label for="departureDate">
							${fieldsLangs.departureDate}:
							<div class="cont">
								<input type="text" name="departureDate" data-id="${
									data.fields.departureDate.id
								}" readonly
									data-type="${data.fields.departureDate.type}"
									value="${findFieldName(
										data.fields.departureDate.id,
										"leads"
									)}" class="departureDate__input text-input _req" placeholder="${
					fieldsLangs.selectField
				}"
								/>
								<div class="clear__btn ${
									data.fields.departureDate.id != "" ? "active" : ""
								}">&#x2716;</div>
								${getFieldsAmoList("text|number", "leads")}
							</div>
						</label>
					</div>
				</div>
			</form>
			`
				return res
			}

			function getCategoriesCottageList(cottageCategoriesData) {
				let res = ``
				if(cottageCategoriesData == '') return ''
				cottageCategoriesData.forEach((item) => {
					res += `
					<div class="categories-cottage-list__container entity-list">
						<p class="categories-cottage-list__item" data-id="${item.category_id}">${item.name}</p>
						<p class="categories-cottage-list__item edit" id="editCategory" data-link="hotel" data-id="${item.category_id}">[Редактировать]</p>
						<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/settings/delete.png" class="deleteTrash categories-cottage-list__item" id="deleteCategoryItemCottage" data-id="${item.category_id}"></img>
					</div>
				`
				})
				return res
			}

			function getCategoriesSaunaList(saunaCategoriesData) {
				let res = ``
				if(saunaCategoriesData == '') return ''
				saunaCategoriesData.forEach((item) => {
					res += `
					<div class="categories-sauna-list__container entity-list">
						<p class="categories-sauna-list__item" data-id="${item.category_id}">${item.name}</p>
						<p class="categories-sauna-list__item edit" id="editCategoryBathhouse" data-link="bathhouse" data-id="${item.category_id}">[Редактировать]</p>
						<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/settings/delete.png" class="deleteTrash" id="deleteCategoryItemSauna" data-id="${item.category_id}"></img>
					</div>
				`
				})
				return res
			}

			function getObjectCategoriesHtml(
				bathhouseTariffs,
				hotelTariffs,
				cottageCategoriesData,
				saunaCategoriesData
			) {
				const textArea = self.render(
					{ref: "/tmpl/controls/textarea.twig"},
					{
						name: "description",
						class_name: "description-textarea",
						placeholder: "Добавьте описание",
					}
				)

				let res = `
				<div class="navbar-internal">
					<div class="cottages__nav active" data-link="cottages">Коттеджи</div>
					<div class="sauna__nav" data-link="sauna">Сауна</div>
				</div>
				<div class="wrap-entity-internal">
					<div class="cottages__entity-internal">
						<div class="categories-cottage-list">${getCategoriesCottageList(
							cottageCategoriesData
						)}</div>
						<div class="button-input" id="add-category">Добавить категорию</div>
						<div class="overlay js-overlay">
							<div class="popup js-popup">
								<div class="navbar-popup">
									<div class="desciption__nav navigation active" data-link="description">Описание</div>
									<div class="сonveniences__nav navigation" data-link="conveniences">Удобства</div>
									<div class="photos__nav navigation" data-link="photos">Фотографии</div>
								</div>
								<div class="close-popup js-close-popup">&#10006;</div>
								<form action="#" method="#" id="cottageForm">
								<div class="wrap-entity-popup">
									<div class="description__entity-popup">
										<label for="name">
											Название: 
											<div class="cont">
												<input type="text" name="name" data-id=""
													data-type="" class="name__input text-input _req" placeholder="Введите текст"/>
												<div class="clear__btn active">&#x2716;</div>
											</div>
										</label>
										<label for="max_guests">
											Вместительность: 
											<div class="cont">
												<input type="number" name="max_guests" data-id=""
													data-type="" class="max_guests__input text-input _req" placeholder="Введите число"/>
												<div class="clear__btn active">&#x2716;</div>
											</div>
										</label>
										<label for="extra_beds">
											Дополнительных мест: 
											<div class="cont">
												<input type="number" name="extra_beds" data-id=""
													data-type="" class="extra_beds__input text-input _req" placeholder="Введите число"/>
												<div class="clear__btn active">&#x2716;</div>
											</div>
										</label>
										<label for="tariff_id__cottage">
											Ценовой тариф: 
											<div class="cont">
												<input type="text" name="tariff_id__cottage" data-id=""
													data-type="" class="tariffs__input text-input" placeholder="Выберите тариф" />
												<div class="clear__btn active">&#x2716;</div>
												${hotelTariffs != '' ? getTariffsList(hotelTariffs) : ''}
											</div>
										</label>
										<label for="time_arrival">
											Время заезда
											<div class="cont">
												<input type="time" name="time_arrival" data-id=""
													data-type="" class="time_arrival__input text-input _req" placeholder="Выберите время" />
												<div class="clear__btn active">&#x2716;</div>
											</div>
										</label>
										<label for="time_departure">
											Время выезда
											<div class="cont">
												<input type="time" name="time_departure" data-id=""
													data-type="" class="time_departure__input text-input _req" placeholder="Выберите время" />
												<div class="clear__btn active">&#x2716;</div>
											</div>
										</label>
										<label for="description">
											Описание: 
											<div class="cont">
												${textArea}
												<div class="clear__btn active">&#x2716;</div>
											</div>
										</label>
										<div class="button-input" id="sendCategoryCottage">Сохранить</div>
									</div>
									<div class="conveniences__entity-popup hidden">
											<ul class="conveniences-list">
												<li class="conveniences-list-item">
													<label>
														<input type="checkbox" class="conveniences-group" data-group-id="1">
														<span class="checkmark"></span>
														Оснащение номера и мебель 
													</label>
													<ul class="conveniences-group-list" data-group="1">
														<li>
															<label>
																<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="int" data-item-group="1" data-item-id="1">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__ploshad"></i>
																Площадь
																<input class="text-input conveniences_value" type="number" name="1-1" data-value-id="1" data-item-type="int" value="0" size="4" min="0" hidden>
																m2
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="2" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="2">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__kondicioner"></i>
																Кондиционирование/Система климат-контроля
																<input class="conveniences_value" type="hidden" name="1-2" data-value-id="2" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="3" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="3">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__obogrevatel"></i>
																Обогреватель
																<input class="conveniences_value" type="hidden" name="1-3" data-value-id="3" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="4" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="4">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__ventilator"></i>
																Вентилятор
																<input class="conveniences_value" type="hidden" name="1-4" data-value-id="4" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="5" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="5">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__camin"></i>
																Камин
																<input class="conveniences_value" type="hidden" name="1-5" data-value-id="5" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="6" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="6">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__safe"></i>
																Сейф
																<input class="conveniences_value" type="hidden" name="1-6" data-value-id="6" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="7" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="7">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__telephone"></i>
																Телефон
																<input class="conveniences_value" type="hidden" name="1-7" data-value-id="7" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="8" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="8">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__work-zone"></i>
																Рабочее пространство
																<input class="conveniences_value" type="hidden" name="1-8" data-value-id="8" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="9" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="9">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__utug"></i>
																Утюг
																<input class="conveniences_value" type="hidden" name="1-9" data-value-id="9" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="10" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="10">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__wardrobe"></i>
																Шкаф/Гардероб
																<input class="conveniences_value" type="hidden" name="1-10" data-value-id="10" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="11" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="11">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__pillows"></i>
																Дополнительные подушки и одеяла
																<input class="conveniences_value" type="hidden" name="1-11" data-value-id="11" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="12">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__mosquito"></i>
																Москитная сетка
																<input class="conveniences_value" type="hidden" name="1-12" data-value-id="12" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="13" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="13">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__light-tight"></i>
																Светонепроницаемые шторы
																<input class="conveniences_value" type="hidden" name="1-13" data-value-id="13" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="14" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="14">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__baby-cot"></i>
																Детская кроватка
																<input class="conveniences_value" type="hidden" name="1-14" data-value-id="14" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="15" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="15">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__balcony"></i>
																Балкон
																<input class="conveniences_value" type="hidden" name="1-15" data-value-id="15" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
													</ul>
												</li>
												

												<li class="conveniences-list-item">
													<label>
														<input type="checkbox" class="conveniences-group" data-group-id="2">
														<span class="checkmark"></span>
														Ванная комната
													</label>
													<ul class="conveniences-group-list" data-group="2">
														<li>
															<label>
																<input type="checkbox" value="16" class="conveniences-group-item"  data-item-type="int" data-item-group="2" data-item-id="16">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__own-bathroom"></i>
																Собственный санузел
																<input class="conveniences_value" type="hidden" name="2-1" data-value-id="16" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="17" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="17">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__general-bathroom"></i>
																Общий санузел
																<input class="conveniences_value" type="hidden" name="2-2" data-value-id="17" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="18" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="18">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__jacuzzi"></i>
																Джакузи
																<input class="conveniences_value" type="hidden" name="2-3" data-value-id="18" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="19" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="19">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__bathrobes"></i>
																Халаты
																<input class="conveniences_value" type="hidden" name="2-4" data-value-id="19" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="20" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="20">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__slippers"></i>
																Тапочки
																<input class="conveniences_value" type="hidden" name="2-5" data-value-id="20" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="21" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="21">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__toiletries"></i>
																Туалетно-косметические принадлежности
																<input class="conveniences_value" type="hidden" name="2-6" data-value-id="21" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="22" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="22">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__bath"></i>
																Ванна
																<input class="conveniences_value" type="hidden" name="2-7" data-value-id="22" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="23" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="23">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__shower"></i>
																Душ
																<input class="conveniences_value" type="hidden" name="2-8" data-value-id="23" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="24" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="24">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__bidet"></i>
																Биде
																<input class="conveniences_value" type="hidden" name="2-9" data-value-id="24" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="25" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="25">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__fan"></i>
																Фен
																<input class="conveniences_value" type="hidden" name="2-10" data-value-id="25" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="26" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="26">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__drying"></i>
																Сушильная машина
																<input class="conveniences_value" type="hidden" name="2-11" data-value-id="26" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="27" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="27">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__washer"></i>
																Стиральная машина
																<input class="conveniences_value" type="hidden" name="2-12" data-value-id="27" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="28" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="28">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__swimming"></i>
																Бассейн
																<input class="conveniences_value" type="hidden" name="2-13" data-value-id="28" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
													</ul>
												</li>

												<li class="conveniences-list-item">
													<label>
														<input type="checkbox" class="conveniences-group" data-group-id="3">
														<span class="checkmark"></span>
														Кухня
													</label>
													<ul class="conveniences-group-list" data-group="3">
														<li>
															<label>
																<input type="checkbox" value="29" class="conveniences-group-item"  data-item-type="int" data-item-group="3" data-item-id="29">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__for-cooking"></i>
																Всё необходимое для приготовления еды
																<input class="conveniences_value" type="hidden" name="3-1" data-value-id="29" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="30" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="30">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__nuke"></i>
																Микроволновка
																<input class="conveniences_value" type="hidden" name="3-2" data-value-id="30" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="31" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="31">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__minibar"></i>
																Минибар
																<input class="conveniences_value" type="hidden" name="3-3" data-value-id="31" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="32" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="32">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__oven"></i>
																Духовка
																<input class="conveniences_value" type="hidden" name="3-4" data-value-id="32" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="33" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="33">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__fridge"></i>
																Холодильник
																<input class="conveniences_value" type="hidden" name="3-5" data-value-id="33" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="34" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="34">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__tableware"></i>
																Столовые приборы
																<input class="conveniences_value" type="hidden" name="3-6" data-value-id="34" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="35" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="35">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__toaster"></i>
																Тостер
																<input class="conveniences_value" type="hidden" name="3-7" data-value-id="35" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="36" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="36">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__dining-table"></i>
																Обеденный стол
																<input class="conveniences_value" type="hidden" name="3-8" data-value-id="36" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="37" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="37">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__cofe-tea"></i>
																Кофе/чай
																<input class="conveniences_value" type="hidden" name="3-9" data-value-id="37" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="38" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="38">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__cofemachine"></i>
																Кофемашина/Кофеварка
																<input class="conveniences_value" type="hidden" name="3-10" data-value-id="38" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="39" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="39">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__teapot"></i>
																Чайник
																<input class="conveniences_value" type="hidden" name="3-11" data-value-id="39" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
													</ul>
												</li>

												<li class="conveniences-list-item">
													<label>
														<input type="checkbox" class="conveniences-group" data-group-id="4">
														<span class="checkmark"></span>
														Электроника и развлечения
													</label>
													<ul class="conveniences-group-list" data-group="4">
														<li>
															<label>
																<input type="checkbox" value="40" class="conveniences-group-item"  data-item-type="int" data-item-group="4" data-item-id="40">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__tv"></i>
																Телевизор
																<input class="conveniences_value" type="hidden" name="4-1" data-value-id="40" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="41" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="41">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__cable-tv"></i>
																Кабельное ТВ
																<input class="conveniences_value" type="hidden" name="4-2" data-value-id="41" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="42" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="42">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__statellit-tv"></i>
																Спутниковое ТВ
																<input class="conveniences_value" type="hidden" name="4-3" data-value-id="42" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="43" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="43">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__sound-system"></i>
																Музыкальный проигрыватель/Звуковая система
																<input class="conveniences_value" type="hidden" name="4-4" data-value-id="43" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="44" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="44">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__wifi"></i>
																WiFi
																<input class="conveniences_value" type="hidden" name="4-5" data-value-id="44" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="45" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="45">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__wired-internet"></i>
																Проводное интернет-соединение
																<input class="conveniences_value" type="hidden" name="4-6" data-value-id="45" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
													</ul>
												</li>

												<li class="conveniences-list-item">
													<label>
														<input type="checkbox" class="conveniences-group" data-group-id="5">
														<span class="checkmark"></span>
														Вид на
													</label>
													<ul class="conveniences-group-list" data-group="5">
														<li>
															<label>
																<input type="checkbox" value="46" class="conveniences-group-item"  data-item-type="int" data-item-group="5" data-item-id="46">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__sea"></i>
																Море
																<input class="conveniences_value" type="hidden" name="5-1" data-value-id="46" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="47" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="47">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__lake"></i>
																Озеро
																<input class="conveniences_value" type="hidden" name="5-2" data-value-id="47" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="48" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="48">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__river"></i>
																Реку
																<input class="conveniences_value" type="hidden" name="5-3" data-value-id="48" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="49" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="49">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__mountains"></i>
																Горы
																<input class="conveniences_value" type="hidden" name="5-4" data-value-id="49" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="50" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="50">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__city"></i>
																Город
																<input class="conveniences_value" type="hidden" name="5-5" data-value-id="50" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="51" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="51">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__courtyard"></i>
																Внутренний двор
																<input class="conveniences_value" type="hidden" name="5-6" data-value-id="51" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="52" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="52">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__swimming"></i>
																Бассейн
																<input class="conveniences_value" type="hidden" name="5-7" data-value-id="52" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="53" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="53">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__forest"></i>
																Сад/Лес
																<input class="conveniences_value" type="hidden" name="5-8" data-value-id="53" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
													</ul>
												</li>

												<li class="conveniences-list-item">
													<label>
														<input type="checkbox" class="conveniences-group" data-group-id="6">
														<span class="checkmark"></span>
														Услуги
													</label>
													<ul class="conveniences-group-list" data-group="6">
														<li>
															<label>
																<input type="checkbox" value="54" class="conveniences-group-item"  data-item-type="int" data-item-group="6" data-item-id="54">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__luggage-storage"></i>
																Хранение багажа
																<input class="conveniences_value" type="hidden" name="6-1" data-value-id="54" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
														<li>
															<label>
																<input type="checkbox" value="55" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="55">
																<span class="checkmark"></span>
																<i class="conveniences-icon conveniences-icon__alarm"></i>
																Услуги будильника
																<input class="conveniences_value" type="hidden" name="6-2" data-value-id="55" data-item-type="bool" value="false" size="4" min="0">
															</label>
														</li>
													</ul>
												</li>
											</ul>
										</form>
									</div>
									<div class="photos__entity-popup hidden">
										<form action="#" method="post" accept-charset="utf-8" class="photos__form">
											<div class="form__item">
												<div class="form__label">Фотографии номеров</div> 
												<div id="formPreview" class="form__preview"></div>
												<div class="file">
													<div class="file__item">
														<input id="formImage" accept=".jpg, .png" type="file" name="image" class="file__input">
														<p class="form__limitations">Максимум 11 изображений в формате JPG или PNG и объёмом не более 6МБ</p> 
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div class="overlay js-overlay-edit">
							<div class="popup js-popup-edit">

							</div>
						</div>
					</div>
					<div class="sauna__entity-internal hidden">
						<div class="categories-sauna-list">${getCategoriesSaunaList(
							saunaCategoriesData
						)}</div>
						<div class="button-input" id="add-category-sauna">Добавить категорию</div>
						<div class="overlay js-overlay-sauna">
							<div class="popup js-popup-sauna">
								<div class="navbar-popup-sauna">
									<div class="desciption__nav navigation active" data-link="description-sauna">Описание</div>
									<div class="сonveniences__nav navigation" data-link="сonveniences-sauna">Удобства</div>
									<div class="photos__nav navigation" data-link="photos-sauna">Фотографии</div>
									<div class="time-block__nav navigation" data-link="time-block-sauna">Блокировка времени</div>
								</div>
								<div class="close-popup js-close-popup-sauna">&#10006;</div>
								<form action="#" method="#" id="saunaForm">
								<div class="wrap-entity-popup-sauna">
									<div class="description-sauna__entity-popup-sauna">
										<label for="name">
											Название: 
											<div class="cont">
												<input type="text" name="name" data-id=""
													data-type=""
													value="" class="name__input text-input _req" placeholder="Введите текст"/>
												<div class="clear__btn active">&#x2716;</div>
											</div>
										</label>
										<label for="tariff_id__bathhouse">
											Ценовой тариф: 
											<div class="cont">
												<input type="text" name="tariff_id__bathhouse" data-id=""
													data-type=""
													value="" class="tariff_id__bathhouse__input text-input" placeholder="Выберите тариф" />
												<div class="clear__btn active">&#x2716;</div>
												${bathhouseTariffs != '' ? getTariffsList(bathhouseTariffs) : ''}
											</div>
										</label>
										<label for="time_start_work">
											Время начала работы 
											<div class="cont">
												<input type="time" name="time_start_work" data-id=""
													data-type=""
													value="" class="time_start_work__input text-input _req"/>
												<div class="clear__btn active">&#x2716;</div>
											</div>
										</label>
										<label for="time_end_work">
											Время окончания работы 
											<div class="cont">
												<input type="time" name="time_end_work" data-id=""
													data-type=""
													value="" class="time_end_work__input text-input _req"/>
												<div class="clear__btn active">&#x2716;</div>
											</div>
										</label>
										<label for="min_booking">
											Минимальная длительность(мин) 
											<div class="cont">
												<input type="time" name="min_booking" data-id=""
													data-type=""
													value="" class="min_booking__input text-input _req" placeholder="Введите число"/>
												<div class="clear__btn active">&#x2716;</div>
											</div>
										</label>
										<label for="min_step">
											Минимальнимальный шаг между записями(мин) 
											<div class="cont">
												<input type="time" name="min_step" data-id=""
													data-type=""
													value="" class="min_step__input text-input _req" placeholder="Введите число"/>
												<div class="clear__btn active">&#x2716;</div>
											</div>
										</label>
										<label for="min_guests">
											Вместительность для цены по умолчанию 
											<div class="cont">
												<input type="number" name="min_guests" data-id=""
													data-type=""
													value="" class="min_guests__input text-input" placeholder="Введите число"/>
												<div class="clear__btn active">&#x2716;</div>
											</div>
										</label>
										<label for="max_guests">
											Максимальная вместительность 
											<div class="cont">
												<input type="number" name="max_guests" data-id=""
													data-type=""
													value="" class="max_guests__input text-input _req" placeholder="Введите число"/>
												<div class="clear__btn active">&#x2716;</div>
											</div>
										</label>
										<label for="description">
											Описание: 
											<div class="cont">
												${textArea}
												<div class="clear__btn active">&#x2716;</div>
											</div>
										</label>
										<div class="button-input" id="sendCategorySauna">Сохранить</div>
									</div>
									<div class="сonveniences-sauna__entity-popup-sauna hidden">
										<ul class="conveniences-list-sauna">
											<li class="conveniences-list-item">
												<label>
													<input type="checkbox" class="conveniences-group" data-ploshad="false" data-group-id="1">
													<span class="checkmark"></span>
													Вид парной
												</label>
												<ul class="conveniences-group-list" data-group="1">
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-ploshad="false"  data-item-id="1">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/russian%20sauna:%20%d1%80%d1%83%d1%81%d1%81%d0%ba%d0%b0%20%d1%81%d0%b0%d1%83%d0%bd%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Русская баня
															<input class="conveniences_value" type="hidden" name="1-1" data-value-id="1" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="2" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="2">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/hamam:%d1%85%d0%b0%d0%bc%d0%b0%d0%bc.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Хамам
															<input class="conveniences_value" type="hidden" name="1-2" data-value-id="2" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="3" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="3">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/Finnish%20sauna:%d1%84%d0%b8%d0%bd%d1%81%d0%ba%d0%b0%d1%8f%20%d1%81%d0%b0%d1%83%d0%bd%d0%b0.png" class="conveniences-icon conveniences-icon__sauna"></img>
															Финская сауна
															<input class="conveniences_value" type="hidden" name="1-3" data-value-id="3" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="4" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="4">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/public%20bath:%d0%be%d0%b1%d1%89%d0%b5%d1%81%d1%82%d0%b2%d0%b5%d0%bd%d0%bd%d0%b0%d1%8f%20%d0%b1%d0%b0%d0%bd%d1%8f.png" class="conveniences-icon conveniences-icon__public-bath"></img>
															Общественная баня
															<input class="conveniences_value" type="hidden" name="1-4" data-value-id="4" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="5" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="5">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/infrared%20sauna:%d0%b8%d0%bd%d1%84%d1%80%d0%b0%d0%ba%d1%80%d0%b0%d1%81%d0%bd%d0%b0%d1%8f%20%d1%81%d0%b0%d1%83%d0%bd%d0%b0.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Инфракрасная сауна
															<input class="conveniences_value" type="hidden" name="1-5" data-value-id="5" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="6" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="6">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/wood-fired%20sauna:%d0%b1%d0%b0%d0%bd%d1%8f%20%d0%bd%d0%b0%20%d0%b4%d1%80%d0%be%d0%b2%d0%b0%d1%85.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Баня на дровах
															<input class="conveniences_value" type="hidden" name="1-6" data-value-id="6" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="7" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="7">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/Japanese%20bath:%d1%8f%d0%bf%d0%be%d0%bd%d0%ba%d0%b0%d1%8f%20%d0%b1%d0%b0%d0%bd%d1%8f.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Японская баня
															<input class="conveniences_value" type="hidden" name="1-7" data-value-id="7" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="8" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="8">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/Roman%20bath:%d1%80%d0%b8%d0%bc%d1%81%d0%ba%d0%b0%d1%8f%20%d0%b1%d0%b0%d0%bd%d1%8f.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Римская баня
															<input class="conveniences_value" type="hidden" name="1-8" data-value-id="8" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="9" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="9">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/cryosauna:%d0%ba%d1%80%d0%b8%d0%be%d1%81%d0%b0%d1%83%d0%bd%d0%b0.png"></img>
															Криосауна
															<input class="conveniences_value" type="hidden" name="1-9" data-value-id="9" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="10" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="10">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/phytosauna:%d1%84%d0%b8%d1%82%d0%be%d1%81%d0%b0%d1%83%d0%bd%d0%b0.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Фитосауна
															<input class="conveniences_value" type="hidden" name="1-10" data-value-id="10" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="11" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="11">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/salt%20room:%d1%81%d0%be%d0%bb%d1%8f%d0%bd%d0%b0%d1%8f%20%d0%ba%d0%be%d0%bc%d0%bd%d0%b0%d1%82%d0%b0.png"></img>
															Соляная комната
															<input class="conveniences_value" type="hidden" name="1-11" data-value-id="11" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="1" data-item-id="12">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%9f%d0%b0%d1%80%d0%bd%d0%b0%d1%8f/mobile%20bath:%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d1%8c%d0%bd%d0%b0%d1%8f%20%d0%b1%d0%b0%d0%bd%d1%8f.png"></img>
															Мобильная баня
															<input class="conveniences_value" type="hidden" name="1-12" data-value-id="12" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
												</ul>
											</li>

											<li class="conveniences-list-item">
												<label>
													<input type="checkbox" class="conveniences-group" data-group-id="2">
													<span class="checkmark"></span>
													Аквазона
												</label>
												<ul class="conveniences-group-list" data-group="2">
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="13">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/swimming%20pool:%d0%b1%d0%b0%d1%81%d1%81%d0%b5%d0%b8%cc%86%d0%bd.png" class="conveniences-icon conveniences-icon__russian"></img>
															Бассейн
															<input class="conveniences_value" type="hidden" name="2-1" data-value-id="13" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="2" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="14">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/Jacuzzi:%d0%b4%d0%b6%d0%b0%d0%ba%d1%83%d0%b7%d0%b8.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Джакузи
															<input class="conveniences_value" type="hidden" name="2-2" data-value-id="14" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="3" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="15">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/waterfall:%d0%b2%d0%be%d0%b4%d0%be%d0%bf%d0%b0%d0%b4.png" class="conveniences-icon conveniences-icon__sauna"></img>
															Водопад
															<input class="conveniences_value" type="hidden" name="2-3" data-value-id="15" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="4" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="16">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/access%20to%20the%20river:lake:%d0%b2%d1%8b%d1%85%d0%be%d0%b4%20%d0%ba%20%d1%80%d0%b5%d0%ba%d0%b5:%d0%be%d0%b7%d0%b5%d1%80%d1%83.png" class="conveniences-icon conveniences-icon__public-bath"></img>
															Выход к реке/озеру
															<input class="conveniences_value" type="hidden" name="2-4" data-value-id="16" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="5" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="17">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/geyser:%d0%b3%d0%b5%d0%b8%cc%86%d0%b7%d0%b5%d1%80.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Гейзер
															<input class="conveniences_value" type="hidden" name="2-5" data-value-id="17" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="6" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="18">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/hydromassage:%d0%b3%d0%b8%d0%b4%d1%80%d0%be%d0%bc%d0%b0%d1%81%d1%81%d0%b0%d0%b6.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Гидромассаж
															<input class="conveniences_value" type="hidden" name="2-6" data-value-id="18" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="7" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="19">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/slide:%d0%b3%d0%be%d1%80%d0%ba%d0%b0.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Горка
															<input class="conveniences_value" type="hidden" name="2-7" data-value-id="19" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="8" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="20">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/shower:%d0%b4%d1%83%d1%88.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Душ
															<input class="conveniences_value" type="hidden" name="2-8" data-value-id="20" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="9" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="21">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/font:%d0%ba%d1%83%d0%bf%d0%b5%d0%bb%d1%8c.png"></img>
															Купель
															<input class="conveniences_value" type="hidden" name="2-9" data-value-id="21" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="10" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="22">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/ice%20pool:%d0%bb%d0%b5%d0%b4%d1%8f%d0%bd%d0%be%d0%b8%cc%86%20%d0%b1%d0%b0%d1%81%d1%81%d0%b5%d0%bd.png" class="conveniences-icon conveniences-icon__hamam"></img>
															Ледяной бассейн
															<input class="conveniences_value" type="hidden" name="2-10" data-value-id="22" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="11" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="23">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/no%20swimming%20pool:%d0%bd%d0%b5%d1%82%20%d0%b1%d0%b0%d1%81%d1%81%d0%b5%d0%b8%cc%86%d0%bd%d0%b0.png"></img>
															Нет бассейна
															<input class="conveniences_value" type="hidden" name="2-11" data-value-id="23" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="24">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/backlight:%d0%bf%d0%be%d0%b4%d1%81%d0%b2%d0%b5%d1%82%d0%ba%d0%b0.png"></img>
															Подсветка
															<input class="conveniences_value" type="hidden" name="2-12" data-value-id="24" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="25">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/countercurrent:%d0%bf%d1%80%d0%be%d1%82%d0%b8%d0%b2%d0%be%d1%82%d0%be%d0%ba.png"></img>
															Противоток
															<input class="conveniences_value" type="hidden" name="2-13" data-value-id="25" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="26">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/sauna%20with%20sea%20water:%d1%81%d0%b0%d1%83%d0%bd%d0%b0%20%d1%81%20%d0%bc%d0%be%d1%80%d1%81%d0%ba%d0%be%d0%b8%cc%86%20%d0%b2%d0%be%d0%b4%d0%be%d0%b8%cc%86.png"></img>
															Сауна с морской водой
															<input class="conveniences_value" type="hidden" name="2-14" data-value-id="26" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="27">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/warm%20swimming%20pool:%d1%82%d0%b5%d0%bf%d0%bb%d1%8b%d0%b8%cc%86%20%d0%b1%d0%b0%d1%81%d1%81%d0%b5%d0%b8%cc%86%d0%bd.png"></img>
															Тёплый бассейн
															<input class="conveniences_value" type="hidden" name="2-15" data-value-id="27" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="28">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/tub:%d1%83%d1%88%d0%b0%d1%82.png"></img>
															Ушат
															<input class="conveniences_value" type="hidden" name="2-16" data-value-id="28" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="29">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/bath:%d0%b2%d0%b0%d0%bd%d0%bd%d0%b0.png"></img>
															Ванна
															<input class="conveniences_value" type="hidden" name="2-17" data-value-id="29" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="12" class="conveniences-group-item"  data-item-type="bool" data-item-group="2" data-item-id="30">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%90%d0%ba%d0%b2%d0%b0%d0%b7%d0%be%d0%bd%d0%b0/vat:%d1%87%d0%b0%d0%bd.png"></img>
															Чан
															<input class="conveniences_value" type="hidden" name="2-18" data-value-id="30" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
												</ul>
											</li>
											<li class="conveniences-list-item">
												<label>
													<input type="checkbox" class="conveniences-group" data-group-id="3">
													<span class="checkmark"></span>
													Сервис
												</label>
												<ul class="conveniences-group-list" data-group="3">
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="31">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/steam%20room%20fragrances:%d0%b0%d1%80%d0%be%d0%bc%d0%b0%d1%82%d1%8b%20%d0%b4%d0%bb%d1%8f%20%d0%bf%d0%b0%d1%80%d0%bd%d0%be%d0%b8%cc%86.png" class="conveniences-icon conveniences-icon__russian"></img>
															Ароматы для парной
															<input class="conveniences_value" type="hidden" name="3-1" data-value-id="31" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="32">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/Audio-video%20equipment:%d0%b0%d1%83%d0%b4%d0%b8%d0%be-%d0%b2%d0%b8%d0%b4%d0%b5%d0%be%20%d0%b0%d0%bf%d0%bf%d0%b0%d1%80%d0%b0%d1%82%d1%83%d1%80%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Аудио-видео аппаратура
															<input class="conveniences_value" type="hidden" name="3-2" data-value-id="32" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="33">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/banqueting%20hall:%d0%b1%d0%b0%d0%bd%d0%ba%d0%b5%d1%82%d0%bd%d1%8b%d0%b8%cc%86%20%d0%b7%d0%b0%d0%bb.png" class="conveniences-icon conveniences-icon__russian"></img>
															Банкетный зал
															<input class="conveniences_value" type="hidden" name="3-3" data-value-id="33" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="34">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/bath%20accessories:%d0%b1%d0%b0%d0%bd%d0%bd%d1%8b%d0%b5%20%d0%bf%d1%80%d0%b8%d0%bd%d0%b0%d0%b4%d0%bb%d0%b5%d0%b6%d0%bd%d0%be%d1%81%d1%82%d0%b8.png" class="conveniences-icon conveniences-icon__russian"></img>
															Банные принадлежности
															<input class="conveniences_value" type="hidden" name="3-4" data-value-id="34" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="35">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/bar:%d0%b1%d0%b0%d1%80.png" class="conveniences-icon conveniences-icon__russian"></img>
															Бар
															<input class="conveniences_value" type="hidden" name="3-5" data-value-id="35" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="36">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/free%20wifi:%d0%b1%d0%b5%d1%81%d0%bf%d0%bb%d0%b0%d1%82%d1%8b%d0%b8%cc%86%20%d0%b2%d0%b0%d0%b8%cc%86-%d1%84%d0%b0%d0%b8%cc%86.png" class="conveniences-icon conveniences-icon__russian"></img>
															Бесплатный Wi-Fi
															<input class="conveniences_value" type="hidden" name="3-6" data-value-id="36" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="37">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/brooms:%d0%b2%d0%b5%d0%bd%d0%b8%d0%ba%d0%b8.png" class="conveniences-icon conveniences-icon__russian"></img>
															Веники
															<input class="conveniences_value" type="hidden" name="3-7" data-value-id="37" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="38">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/hotel:%d0%b3%d0%be%d1%81%d1%82%d0%b8%d0%bd%d0%b8%d1%86%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Гостиница/гостевой дом
															<input class="conveniences_value" type="hidden" name="3-8" data-value-id="38" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="39">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/fireplace:%d0%ba%d0%b0%d0%bc%d0%b8%d0%bd.png" class="conveniences-icon conveniences-icon__russian"></img>
															Камин
															<input class="conveniences_value" type="hidden" name="3-9" data-value-id="39" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="40">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/room%20for%20an%20hour:%d0%ba%d0%be%d0%bc%d0%bd%d0%b0%d1%82%d0%b0%20%d0%bd%d0%b0%20%d1%87%d0%b0%d1%81.png" class="conveniences-icon conveniences-icon__russian"></img>
															Комната на час
															<input class="conveniences_value" type="hidden" name="3-10" data-value-id="40" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="41">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/restroom:%d0%ba%d0%be%d0%bc%d0%bd%d0%b0%d1%82%d0%b0%20%d0%be%d1%82%d0%b4%d1%8b%d1%85%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Комната отдыха
															<input class="conveniences_value" type="hidden" name="3-11" data-value-id="41" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="42">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/air%20conditioning:%d0%ba%d0%be%d0%bd%d0%b4%d0%b8%d1%86%d0%b8%d0%be%d0%bd%d0%b5%d1%80.png" class="conveniences-icon conveniences-icon__russian"></img>
															Кондиционер
															<input class="conveniences_value" type="hidden" name="3-12" data-value-id="42" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="43">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/room%20for%20an%20hour:%d0%ba%d0%be%d0%bc%d0%bd%d0%b0%d1%82%d0%b0%20%d0%bd%d0%b0%20%d1%87%d0%b0%d1%81.png" class="conveniences-icon conveniences-icon__russian"></img>
															Летняя веранда
															<input class="conveniences_value" type="hidden" name="3-13" data-value-id="43" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="44">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/brazier:%d0%bc%d0%b0%d0%bd%d0%b3%d0%b0%d0%bb.png" class="conveniences-icon conveniences-icon__russian"></img>
															Мангал
															<input class="conveniences_value" type="hidden" name="3-14" data-value-id="44" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="45">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/mansard:%d0%bc%d0%b0%d0%bd%d1%81%d0%b0%d0%bd%d0%b4%d1%80%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Мансарда
															<input class="conveniences_value" type="hidden" name="3-15" data-value-id="45" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="46">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/massage%20chair:%d0%bc%d0%b0%d1%81%d1%81%d0%b0%d0%b6%d0%bd%d0%be%d0%b5%20%d0%ba%d1%80%d0%b5%d1%81%d0%bb%d0%be.png" class="conveniences-icon conveniences-icon__russian"></img>
															Массажное кресло
															<input class="conveniences_value" type="hidden" name="3-16" data-value-id="46" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="47">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/parking:%d0%bf%d0%b0%d1%80%d0%ba%d0%be%d0%b2%d0%ba%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Парковка
															<input class="conveniences_value" type="hidden" name="3-17" data-value-id="47" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="48">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/with%20your%20food:%d1%81%d0%be%20%d1%81%d0%b2%d0%be%d0%b5%d0%b8%cc%86%20%d0%b5%d0%b4%d0%be%d0%b8%cc%86.png" class="conveniences-icon conveniences-icon__russian"></img>
															Со своей едой
															<input class="conveniences_value" type="hidden" name="3-18" data-value-id="48" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="49">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/solarium:%d1%81%d0%be%d0%bb%d1%8f%d1%80%d0%b8%d0%b8%cc%86.png" class="conveniences-icon conveniences-icon__russian"></img>
															Солярий
															<input class="conveniences_value" type="hidden" name="3-19" data-value-id="49" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="50">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/bath%20cap:%d1%88%d0%b0%d0%bf%d0%be%d1%87%d0%ba%d0%b0%20%d0%b4%d0%bb%d1%8f%20%d0%b1%d0%b0%d0%bd%d0%b8.png" class="conveniences-icon conveniences-icon__russian"></img>
															Шапочка для бани
															<input class="conveniences_value" type="hidden" name="3-20" data-value-id="50" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="51">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/strip%20podium:%d1%81%d1%82%d1%80%d0%b8%d0%bf%20%d0%bf%d0%be%d0%b4%d0%b8%d1%83%d0%bc.png" class="conveniences-icon conveniences-icon__russian"></img>
															Стрип-подиум
															<input class="conveniences_value" type="hidden" name="3-21" data-value-id="51" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="52">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/bathrobe:%d0%b1%d0%b0%d0%bd%d0%bd%d1%8b%d0%b8%cc%86%20%d1%85%d0%b0%d0%bb%d0%b0%d1%82.png" class="conveniences-icon conveniences-icon__russian"></img>
															Банный халат
															<input class="conveniences_value" type="hidden" name="3-22" data-value-id="52" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="53">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/bed:%d0%ba%d1%80%d0%be%d0%b2%d0%b0%d1%82%d1%8c.png" class="conveniences-icon conveniences-icon__russian"></img>
															Кровать
															<input class="conveniences_value" type="hidden" name="3-23" data-value-id="53" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="54">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/a%20massage%20table:%d0%bc%d0%b0%d1%81%d1%81%d0%b0%d0%b6%d0%bd%d1%8b%d0%b8%cc%86%20%d1%81%d1%82%d0%be%d0%bb.png" class="conveniences-icon conveniences-icon__russian"></img>
															Массажный стол
															<input class="conveniences_value" type="hidden" name="3-24" data-value-id="54" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="55">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%D0%A1%D0%B5%D1%80%D0%B2%D0%B8%D1%81/pole:%D1%88%D0%B5%D1%81%D1%82.png" class="conveniences-icon conveniences-icon__russian"></img>
															Шест
															<input class="conveniences_value" type="hidden" name="3-25" data-value-id="55" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="56">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/summer%20terrace:%d0%bb%d0%b5%d1%82%d0%bd%d1%8f%d1%8f%20%d0%b2%d0%b5%d1%80%d0%b0%d0%bd%d0%b4%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Летняя веранда
															<input class="conveniences_value" type="hidden" name="3-26" data-value-id="56" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="3" data-item-id="57">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a1%d0%b5%d1%80%d0%b2%d0%b8%d1%81/towel:%d0%bf%d0%be%d0%bb%d0%be%d1%82%d0%b5%d0%bd%d1%86%d0%b5.png"></img>
															Полотенце
															<input class="conveniences_value" type="hidden" name="3-27" data-value-id="57" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
												</ul>
											</li>
											<li class="conveniences-list-item">
												<label>
													<input type="checkbox" class="conveniences-group" data-group-id="4">
													<span class="checkmark"></span>
													Услуги
												</label>
												<ul class="conveniences-group-list" data-group="4">
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="58">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/water%20aerobics:%d0%b0%d0%ba%d0%b2%d0%b0%d0%b0%d1%8d%d1%80%d0%be%d0%b1%d0%b8%d0%ba%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Аквааэробика
															<input class="conveniences_value" type="hidden" name="4-1" data-value-id="58" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="59">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/dishes%20on%20the%20grill:%d0%b1%d0%bb%d1%8e%d0%b4%d0%b0%20%d0%bd%d0%b0%20%d0%bc%d0%b0%d0%bd%d0%b3%d0%b0%d0%bb%d0%b5.png" class="conveniences-icon conveniences-icon__russian"></img>
															Блюда на мангале
															<input class="conveniences_value" type="hidden" name="4-2" data-value-id="59" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="60">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/hookah:%d0%ba%d0%b0%d0%bb%d1%8c%d1%8f%d0%bd.png" class="conveniences-icon conveniences-icon__russian"></img>
															Кальян
															<input class="conveniences_value" type="hidden" name="4-3" data-value-id="60" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="61">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/kitchen:%d0%ba%d1%83%d1%85%d0%bd%d1%8f.png" class="conveniences-icon conveniences-icon__russian"></img>
															Кухня
															<input class="conveniences_value" type="hidden" name="4-4" data-value-id="61" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="62">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/massage:%d0%bc%d0%b0%d1%81%d1%81%d0%b0%d0%b6.png" class="conveniences-icon conveniences-icon__russian"></img>
															Массаж
															<input class="conveniences_value" type="hidden" name="4-5" data-value-id="62" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="63">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/spa%20salons:%d1%81%d0%bf%d0%b0%20%d1%81%d0%b0%d0%bb%d0%be%d0%bd%d1%8b.png" class="conveniences-icon conveniences-icon__russian"></img>
															СПА салоны
															<input class="conveniences_value" type="hidden" name="4-6" data-value-id="63" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="64">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/gym:%d1%82%d1%80%d0%b5%d0%bd%d0%b0%d0%b6%d0%b5%d1%80%d0%bd%d1%8b%d0%b8%cc%86%20%d0%b7%d0%b0%d0%bb.png" class="conveniences-icon conveniences-icon__russian"></img>
															Тренажерный зал
															<input class="conveniences_value" type="hidden" name="4-7" data-value-id="64" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="65">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/attendant%20services:%d1%83%d1%81%d0%bb%d1%83%d0%b3%d0%b8%20%d0%b1%d0%b0%d0%bd%d1%89%d0%b8%d0%ba%d0%b0.png" class="conveniences-icon conveniences-icon__russian"></img>
															Услуги банщика
															<input class="conveniences_value" type="hidden" name="4-8" data-value-id="65" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="4" data-item-id="66">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a3%d1%81%d0%bb%d1%83%d0%b3%d0%b8/fitness:%d1%84%d0%b8%d1%82%d0%bd%d0%b5%d1%81.png" class="conveniences-icon conveniences-icon__russian"></img>
															Фитнес
															<input class="conveniences_value" type="hidden" name="4-9" data-value-id="66" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
												</ul>
											</li>
											<li class="conveniences-list-item">
												<label>
													<input type="checkbox" class="conveniences-group" data-group-id="5">
													<span class="checkmark"></span>
													Развлечения
												</label>
												<ul class="conveniences-group-list" data-group="5">
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="67">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/air%20hockey:%d0%b0%d1%8d%d1%80%d0%be%d1%85%d0%be%d0%ba%d0%ba%d0%b5%d0%b8%cc%86.png" class="conveniences-icon conveniences-icon__russian"></img>
															Аэрохоккей
															<input class="conveniences_value" type="hidden" name="5-1" data-value-id="67" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="68">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/darts:%d0%b4%d0%b0%d1%80%d1%82%d1%81.png" class="conveniences-icon conveniences-icon__russian"></img>
															Дартс
															<input class="conveniences_value" type="hidden" name="5-2" data-value-id="68" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="69">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/playing%20cards:%d0%b8%d0%b3%d1%80%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5%20%d0%ba%d0%b0%d1%80%d1%82%d1%8b.png" class="conveniences-icon conveniences-icon__russian"></img>
															Игральные карты
															<input class="conveniences_value" type="hidden" name="5-3" data-value-id="69" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="70">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/karaoke:%d0%ba%d0%b0%d1%80%d0%b0%d0%be%d0%ba%d0%b5.png" class="conveniences-icon conveniences-icon__russian"></img>
															Караоке
															<input class="conveniences_value" type="hidden" name="5-4" data-value-id="70" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="71">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/musical%20apparatus:%d0%bc%d1%83%d0%b7%d0%ba%d0%b0%d0%bb%d1%8c%d0%bd%d1%8b%d0%b8%cc%86%20%d0%b0%d0%bf%d0%bf%d0%b0%d1%80%d0%b0%d1%82.png" class="conveniences-icon conveniences-icon__russian"></img>
															Музыкальный аппарат
															<input class="conveniences_value" type="hidden" name="5-5" data-value-id="71" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="72">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/backgammon:%d0%bd%d0%b0%d1%80%d0%b4%d1%8b.png" class="conveniences-icon conveniences-icon__russian"></img>
															Нарды
															<input class="conveniences_value" type="hidden" name="5-6" data-value-id="72" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="73">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/board%20games:%d0%bd%d0%b0%d1%81%d1%82%d0%be%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5%20%d0%b8%d0%b3%d1%80%d1%8b.png" class="conveniences-icon conveniences-icon__russian"></img>
															Настольные игры
															<input class="conveniences_value" type="hidden" name="5-7" data-value-id="73" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="74">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/table%20tennis:%d0%bd%d0%b0%d1%81%d1%82%d0%be%d0%bb%d1%8c%d0%bd%d1%8b%d0%b8%cc%86%20%d1%82%d0%b5%d0%bd%d0%bd%d0%b8%d1%81.png" class="conveniences-icon conveniences-icon__russian"></img>
															Настольный теннис
															<input class="conveniences_value" type="hidden" name="5-8" data-value-id="74" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="75">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/table%20football:%d0%bd%d0%b0%d1%81%d1%82%d0%be%d0%bb%d1%8c%d0%bd%d1%8b%d0%b8%cc%86%20%d1%84%d1%83%d1%82%d0%b1%d0%be%d0%bb.png" class="conveniences-icon conveniences-icon__russian"></img>
															Настольный футбол
															<input class="conveniences_value" type="hidden" name="5-9" data-value-id="75" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="76">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/table%20hockey:%d0%bd%d0%b0%d1%81%d1%82%d0%be%d0%bb%d1%8c%d0%bd%d1%8b%d0%b8%cc%86%20%d1%85%d0%be%d0%ba%d0%ba%d0%b5%d0%b8%cc%86.png" class="conveniences-icon conveniences-icon__russian"></img>
															Настольный хоккей
															<input class="conveniences_value" type="hidden" name="5-10" data-value-id="76" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="77">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/Pool%20american%20billiards:%d0%bf%d1%83%d0%bb%20%d0%b0%d0%bc%d0%b5%d0%b8%d0%ba%d0%b0%d0%bd%d1%81%d0%ba%d0%b8%d0%b8%cc%86%20%d0%b1%d0%b8%d0%bb%d1%8c%d1%8f%d1%80%d0%b4.png" class="conveniences-icon conveniences-icon__russian"></img>
															Пул американский бильярд
															<input class="conveniences_value" type="hidden" name="5-11" data-value-id="77" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="5" data-item-id="78">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%a0%d0%b0%d0%b7%d0%b2%d0%bb%d0%b5%d1%87%d0%b5%d0%bd%d0%b8%d1%8f/Russian%20billiards:%d1%80%d1%83%d1%81%d1%81%d0%ba%d0%b8%d0%b8%cc%86%20%d0%b1%d0%b8%d0%bb%d1%8c%d1%8f%d1%80%d0%b4.png" class="conveniences-icon conveniences-icon__russian"></img>
															Русский бильярд
															<input class="conveniences_value" type="hidden" name="5-12" data-value-id="78" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
												</ul>
											</li>
											<li class="conveniences-list-item">
												<label>
													<input type="checkbox" class="conveniences-group" data-group-id="6">
													<span class="checkmark"></span>
													Вид на
												</label>
												<ul class="conveniences-group-list" data-group="6">
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="79">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/city:%d0%b3%d0%be%d1%80%d0%be%d0%b4.png" class="conveniences-icon conveniences-icon__russian"></img>
															Город
															<input class="conveniences_value" type="hidden" name="6-1" data-value-id="79" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="80">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/courtyard:%d0%b4%d0%b2%d0%be%d1%80.png" class="conveniences-icon conveniences-icon__russian"></img>
															Двор
															<input class="conveniences_value" type="hidden" name="6-2" data-value-id="80" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="81">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/garden,%20forest:%d1%81%d0%b0%d0%b4,%d0%bb%d0%b5%d1%81.png" class="conveniences-icon conveniences-icon__russian"></img>
															Сад, лес
															<input class="conveniences_value" type="hidden" name="6-3" data-value-id="81" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="82">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/lake:%d0%be%d0%b7%d0%b5%d1%80%d0%be.png" class="conveniences-icon conveniences-icon__russian"></img>
															Озеро
															<input class="conveniences_value" type="hidden" name="6-4" data-value-id="82" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="83">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/mountains:%d0%b3%d0%be%d1%80%d1%8b.png" class="conveniences-icon conveniences-icon__russian"></img>
															Горы
															<input class="conveniences_value" type="hidden" name="6-5" data-value-id="83" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="84">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/" class="conveniences-icon conveniences-icon__russian"></img>
															Река
															<input class="conveniences_value" type="hidden" name="6-6" data-value-id="84" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="85">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/sea:%d0%bc%d0%be%d1%80%d0%b5.png" class="conveniences-icon conveniences-icon__russian"></img>
															Море
															<input class="conveniences_value" type="hidden" name="6-7" data-value-id="85" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
													<li>
														<label>
															<input type="checkbox" value="1" class="conveniences-group-item"  data-item-type="bool" data-item-group="6" data-item-id="86">
															<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/bathhouse/%d0%92%d0%b8%d0%b4%20%d0%bd%d0%b0/swimming%20pool:%d0%b1%d0%b0%d1%81%d1%81%d0%b8%cc%86%d0%bd.png" class="conveniences-icon conveniences-icon__russian"></img>
															Бассейн
															<input class="conveniences_value" type="hidden" name="6-8" data-value-id="86" data-item-type="bool" value="false" size="4" min="0">
														</label>
													</li>
												</ul>
											</li>
										</ul>
									</div>
									<div class="photos-sauna__entity-popup-sauna hidden">
										<div class="form__item">
											<div class="form__label">Фотографии сауны</div> 
											<div id="formPreviewSauna" class="form__preview"></div>
											<div class="file">
												<div class="file__item">
													<input id="formImageSauna" accept=".jpg, .png" type="file" name="image" class="file__input">
													<p class="form__limitations">Максимум 11 изображений в формате JPG или PNG и объёмом не более 6МБ</p> 
												</div>
											</div>
										</div>
									</div>
									<div class="time-block-sauna__entity-popup-sauna hidden">
										<label for="blocked_periods">
											Есть заблокированные временные промежутки 
											<div class="cont">
												<input type="checkbox" name="blocked_periods" data-id=""
													data-type=""
													value="" id="blockTimeIntervals" class="blocked_periods__input checkbox-input"/>
											</div>
										</label>
										<p class="form__limitations">Используется для тех случаев, когда необходимо выделить промежуток как санитарный, либо если Вы хотите чтобы временной промежуток был доступен только для тех, кто бронирует ещё и коттедж</p>
										<div class="time-block-wrap"></div>
										<div class="button-input hidden" id="addTimeBlock">Добавить</div>
									</div>
								</div>
								</form>
							</div>
						</div>
						<div class="overlay js-overlay-edit-bathhouse">
							<div class="popup js-popup-edit-bathhouse">

							</div>
						</div>
					</div>
				</div>
			`
				return res
			}

			$(`#work_area .list__body-right__top`).append(getSaveBtnHtml())
			$(`#work-area-${w_code}`).append(`
			<div class="loader-cont">
				<div class="loader"></div>
			</div>
		`)

			$(`#work-area-${w_code}`).append(`
			<input type="hidden" id="data-${w_code}" 
				data-old="${encodeURIComponent(
					JSON.stringify({
						accountIdAmo: AMOCRM.constant("account").id,
						data: data,
					})
				)}"
			value=""/>
		`)

			$("#work_area").append(`
			<div class="${w_code} wrap">
				<div class="navbar">
					<div class="fields-settings__nav active" data-link="fields-settings">Общие настройки</div>
					<div class="object-categories__nav" data-link="object-categories">Категории объектов</div>
					<div class="object-list__nav" data-link="object-list">Список объектов</div>
					<div class="price-tariffs__nav" data-link="price-tariffs">Ценовые тарифы</div>
				</div>
				<div class="wrap-entity">
					<div class="fields-settings__entity">
						${getSettingHtml(data, pipelines)}
					</div>
					<div class="object-categories__entity hidden">
						${getObjectCategoriesHtml(
							bathhouseTariffs,
							hotelTariffs,
							cottageCategoriesData,
							saunaCategoriesData
						)}
					</div>
					<div class="object-list__entity hidden">
						<p>Object list</p>
					</div>
					<div class="price-tariffs__entity hidden">
					</div>
				</div>
			</div>
		`)
		}

		function addTimeBlock(e) {
			let addTimeBlockHtml = `
		<div class="time-block-wrap__form">
			<label for="timeStart">
				Время начала
					<div class="cont">
						<input type="time" name="timeStart" data-id="" data-type="" value="" class="timeStart__input text-input"/>
					</div>
			</label>
			<label for="timeEnd">
				Время конца
					<div class="cont">
						<input type="time" name="timeEnd" data-id="" data-type="" value="" class="timeEnd__input text-input"/>
					</div>
			</label>
			<label for="typeBlock">
				Тип блокировки
				<div class="cont">
					<select name="typeBlock">
						<option value="sanitary">Санитарный</option>
						<option value="onlyBooking">Только при брони коттеджа</option>
					</select>
				</div>
			</label>
			<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/settings/delete.png" class="deleteTrash" id="deleteTimeBlock"></img>
		</div>
		`

			if($(e.target).is('#addTimeBlock')) {
				$(".time-block-wrap").append(addTimeBlockHtml)
			} else $('.time-block-wrap-edit').append(addTimeBlockHtml)
		}

		function preview(file, postfix = "") {
			if (!["image/jpeg", "image/png"].includes(file.type)) {
				alert("Разрешены только изображения.")
				formImage[0].value = ""
				return
			}
			if (file.size > 6 * 1024 * 1024) {
				alert("Файл должен быть менее 6 МБ.")
				return
			}

			let reader = new FileReader()
			reader.onload = function (e) {
				$(`#formPreview${postfix}`).append(
					`<div class="form__preview__wrap"><img src="${e.target.result}" alt="Фото"><img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/settings/delete.png" class="deleteTrash" id="deleteImage${postfix}"></img></div>`
				)
			}
			reader.onerror = function (e) {
				alert("Ошибка")
			}
			reader.readAsDataURL(file)
		}

		function getTariffsList(tariffs, selectedId = "", multiSelect = false) {
			let res = `<ul class="custom__list hidden custom-scroll ${multiSelect ? "multi-select" : ""}">`

			tariffs.forEach((tariff) => {
				let selected = selectedId.includes(tariff.tariff_id) ? "selected" : ""
				res += `
			<li class="custom__list-el" ${selected} data-id="${tariff.tariff_id}" data-name="${tariff.name}" data-dates="${tariff.unique_dates}" data-price="${tariff.periods}">${tariff.name}</li>
			`
			})

			res += "</ul>"
			return res
		}

		function addCategoryCottage(e, categoryId, file = "") {
			let form
			if($(e.target).is('#sendEditCategoryCottage')) {
				form = document.getElementById("cottageEditForm")
			}  else form = document.getElementById("cottageForm")

			let formData = new FormData(form)
			if (file != "") formData.append("image", file)

			let error = formValidate(form)

			function formValidate(form) {
				let error = 0
				let formReq
				if($(form).is('#cottageEditForm')) {
					formReq = $('#cottageEditForm ._req')
				} else {
					formReq = $("#cottageForm ._req")
				}

				for (let i = 0; i < formReq.length; i++) {
					const input = formReq[i]
					formRemoveError(input)

					if (input.value === "") {
						formAddError(input)
						error++
					}
				}
				return error
			}

			function formAddError(input) {
				$(input).addClass("_error")
			}
			function formRemoveError(input) {
				$(input).removeClass("_error")
			}

			if (error > 0) {
				alert("Ключевые поля не заполнены")
			} else {
				let data = {
					facilities: [],
					photos: "{}",
				}
				let nameForLayout
				for (let [name, value] of formData) {
					if (
						name == "name" ||
						name == "description" ||
						name == "time_arrival" ||
						name == "time_departure"
					) {
						if (name == "name") nameForLayout = value
						data[name] = value
					} else if (name == "max_guests" || name == "extra_beds") {
						data[name] = Number(value)
					} else if (name == "tariff_id__cottage") {
						let tariff_id = $(`.tariffs__input[name="${name}"]`).attr("data-id")
						data["tariff_id"] = Number(tariff_id)
					} else if (name == 'tariff_id__cottage__edit') {
						let tariff_id = $(`.tariffs__input[name="${name}"]`).attr("data-id")
						data["tariff_id"] = Number(tariff_id)
					} else if (name == "image") {
						data["photos"][name] = String(value)
					} else {
						let obj = {
							id: name,
							on: String(value),
						}
						data["facilities"].push(obj)
					}
				}
				data["facilities"] = JSON.stringify(data["facilities"])
				data = JSON.stringify(data)
				if($(e.target).is('#sendEditCategoryCottage')) {
					patchCategoryCottageRequest(data, categoryId).then((response) => {
						$(".js-overlay-edit").fadeOut()
						form.reset()
					})
				}  else {
					saveCategoryCottageRequest(data).then((response) => {
						$(".categories-cottage-list").append(`
						<div class="categories-cottage-list__container entity-list">
							<p class="categories-cottage-list__item" data-id="${response}">${nameForLayout}</p>
							<p class="categories-cottage-list__item" id="editCategory" data-link="hotel" data-id="${response}">[Редактировать]</p>
							<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/settings/delete.png" class="deleteTrash categories-cottage-list__item" id="deleteCategoryItemCottage" data-id="${response}"></img>
						</div>
					`)
						$(".js-overlay").fadeOut()
						form.reset()
					})
				}
			}
		}

		function patchCategoryCottageRequest(data, categoryId) {
			return new Promise((resolve) => {
				$.ajax({
					type: "PATCH",
					url:
						"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/change_categories.php?id=" +
						AMOCRM.constant("account").id + "&type_data=hotel&category_id=" + categoryId,
					headers: {
						"Content-type": "application/json",
					},
					data: data,
					dataType: "json",
					success: function (response) {
						resolve(response)
					},
					error: function (err) {
						console.debug(err)
					},
				})
			})
		}

		function patchCategorySaunaRequest(data, categoryId) {
			return new Promise((resolve) => {
				$.ajax({
					type: "PATCH",
					url:
						"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/change_categories.php?id=" +
						AMOCRM.constant("account").id + "&type_data=bathhouse&category_id=" + categoryId,
					headers: {
						"Content-type": "application/json",
					},
					data: data,
					dataType: "json",
					success: function (response) {
						resolve(response)
					},
					error: function (err) {
						console.debug(err)
					},
				})
			})
		}

		function saveCategoryCottageRequest(data) {
			return new Promise((resolve) => {
				$.ajax({
					type: "POST",
					url:
						"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/create_categories.php?id=" +
						AMOCRM.constant("account").id +
						"&type_data=hotel",
					headers: {
						"Content-type": "application/json",
					},
					data: data,
					dataType: "json",
					success: function (response) {
						resolve(response)
					},
					error: function (err, response) {
						console.debug(err)
					},
				})
			})
		}

		function addCategorySauna(e, categoryId, file = "") {
			let form
			if($(e.target).is('#sendEditCategorySauna')) {
				form = document.getElementById("saunaEditForm")
			} else form = document.getElementById("saunaForm")

			let formData = new FormData(form)
			if (file != "") formData.append("image", file)

			let error = formValidate(form)

			function formValidate(form) {
				let error = 0

				let formReq
				if($(form).is('#saunaEditForm')) {
					formReq = $('#saunaEditForm ._req')
				} else {
					formReq = $("#saunaForm ._req")
				}

				for (let i = 0; i < formReq.length; i++) {
					const input = formReq[i]
					formRemoveError(input)

					if (input.value === "") {
						formAddError(input)
						error++
					}
				}
				return error
			}

			function formAddError(input) {
				$(input).addClass("_error")
			}
			function formRemoveError(input) {
				$(input).removeClass("_error")
			}

			if (error > 0) {
				alert("Ключевые поля не заполнены")
			} else {
				let body = {
					facilities: [],
					blocked_periods: timeBlockFunc(),
					photos: {},
				}
				let nameForLayout

				function timeBlockFunc() {
					let timeBlockArray = []
					if ($("#blockTimeIntervals").is(":checked")) {
						$(".time-block-wrap__form").each(function () {
							const timeStart = $(this).find('[name="timeStart"]').val()
							const timeEnd = $(this).find('[name="timeEnd"]').val()
							const typeBlock = $(this).find('[name="typeBlock"]').val()

							timeBlockArray.push({
								timeStart: timeStart,
								timeEnd: timeEnd,
								typeBlock: typeBlock,
							})
						})
					} else return
					return timeBlockArray
				}

				for (let [name, value] of formData) {
					if (
						name == "name" ||
						name == "description" ||
						name == "time_start_work" ||
						name == "time_end_work" ||
						name == "min_booking" ||
						name == "min_step"
					) {
						if (name == "name") nameForLayout = value
						body[name] = value
					} else if (name == "tariff_id__bathhouse") {
						let tariff_id = $(`.tariff_id__bathhouse__input[name="${name}"]`).attr("data-id")
						body["tariff_id"] = Number(tariff_id)
					} else if(name == 'tariff_id__bathhouse-edit'){
						let tariff_id = $(`.tariff_id__bathhouse__input__edit[name="${name}"]`).attr("data-id")
						body["tariff_id"] = Number(tariff_id)
					} else if (name == "min_guests" || name == "max_guests") {
						body[name] = Number(value)
					} else if (name == "image") {
					} else if (
						name == "timeEnd" ||
						name == "timeStart" ||
						name == "typeBlock" ||
						name == "blocked_periods"
					) {
					} else {
						let obj = {
							id: name,
							on: String(value),
						}
						body["facilities"].push(obj)
					}
				}

				body['facilities'] = JSON.stringify(body['facilities'])
				body = JSON.stringify(body)
				if($(e.target).is('#sendEditCategorySauna')) {
					patchCategorySaunaRequest(body, categoryId).then((response) => {
						$(".js-overlay-edit-bathhouse").fadeOut()
						form.reset()
					})
				} else {
					saveCategoryBathhouseRequest(body).then((response) => {
						$(".description-sauna__entity-popup-sauna").append(
							'<div class="successText">Успешно создано</div>'
						)
						$(".categories-sauna-list").append(`
						<div class="categories-sauna-list__container entity-list">
							<p class="categories-sauna-list__item" data-id="${response}">${nameForLayout}</p>
							<p class="categories-sauna-list__item" id="editCategoryBathhouse" data-link="bathhouse" data-id="${response}">[Редактировать]</p>
							<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/settings/delete.png" class="deleteTrash categories-sauna-list__item" id="deleteCategoryItemSauna" data-id="${response}"></img>
						</div>
					`)
						$(".js-overlay-sauna").fadeOut()
						form.reset()
					})
				}
			}
		}

		function saveCategoryBathhouseRequest(body) {
			return new Promise((resolve) => {
				$.ajax({
					type: "POST",
					url:
						"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/create_categories.php?id=" +
						AMOCRM.constant("account").id +
						"&type_data=bathhouse",
					headers: {
						"Content-type": "application/json",
					},
					data: body,
					dataType: "json",
					success: function (response) {
						resolve(response)
					},
					error: function (err) {
						console.debug(err)
					},
				})
			})
		}

		function saveTariffCottage(cottageCategoriesData) {
			let form
			if($(e.target).is('saveTariffCottageEdit')) {
				form = document.getElementById('tariffFormCottageEdit')
			} else {
				form = document.getElementById("tariffFormCottage")
			}

			let formData = new FormData(form)

			let error = formValidate(form)

			function formValidate(form) {
				let error = 0
				let formReq
				if($(form).is('tariffFormCottageEdit')) {
					formReq = $("#tariffFormCottageEdit ._req")
				} else {
					formReq = $("#tariffFormCottage ._req")
				}

				for (let i = 0; i < formReq.length; i++) {
					const input = formReq[i]
					formRemoveError(input)

					if (input.value === "") {
						formAddError(input)
						error++
					}
				}
				return error
			}

			function formAddError(input) {
				$(input).addClass("_error")
			}
			function formRemoveError(input) {
				$(input).removeClass("_error")
			}

			if (error > 0) {
				alert("Ключевые поля не заполнены")
			} else {
				let body = {}
				let nameForLayout

				let data = {
					categories: [],
				}

				for (let [name, value] of formData) {
					if (name == "name") {
						body[name] = value
						nameForLayout = value
					} else if (name.includes("price[")) {
						//Надо будет прописать так же tariff_id, но это в complete POST для тарифа
						let category_id = $(`.table2__input[name="${name}"]`).attr(
							"data-category"
						)
						let category = {
							category_id: category_id,
							dates: {},
						}
						if (value != "") {
							category["dates"]["date"] = $(`.table2__input[name="${name}"]`).attr("data-date")
							category["dates"]["price"] = value
							data["categories"].push(category)
						}
					}
				}

				body = JSON.stringify(body)
				saveTariffCottageRequest(body).then((response) => {
					$(".saved-container-cottage").prepend(
						'<div class="successText">Успешно создано</div>'
					)
					$(".tariffs-cottage-list").append(`
					<div class="tariffs-cottage-list__container entity-list">
						<p class="tariffs-cottage-list__item" data-id="${response}">${nameForLayout}</p>
						<p class="tariffs-cottage-list__item edit" id="editTariff" data-link="hotel" data-id="${response}">[Редактировать]</p>
						<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/settings/delete.png" class="deleteTrash ctariffs-cottage-list__item" id="deleteTariffItemCottage" data-id="${response}"></img>
					</div>
					`)
					form.reset()
					$('.js-overlay-tarif-cottage').fadeOut()
					$('.js-overlay-tarif-cottage-internal').fadeOut()

					if (data["categories"].length != 0) {
						data["tariff_id"] = response
						data = JSON.stringify(data)
						$.ajax({
							type: "PUT",
							url:
								"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/change_tariffs.php?id=" +
								AMOCRM.constant("account").id +
								"&type_data=hotel&type_request=unique_dates",
							headers: {
								"Content-type": "application/json",
							},
							data: data,
							dataType: "json",
							success: function (response) {
								console.log(response)
							},
							error: function (err) {
								console.debug(err)
							},
						})
					}
					if (collectDataPeriodCottage(cottageCategoriesData, response) != undefined) {
						let periodsData = collectDataPeriodCottage(cottageCategoriesData, response)
						if (periodsData["category"].length > 0) {
							periodsData = JSON.stringify(periodsData)
							$.ajax({
								type: "PUT",
								url:
									"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/change_tariffs.php?id=" +
									AMOCRM.constant("account").id +
									"&type_data=hotel&type_request=periods",
								headers: {
									"Content-type": "application/json",
								},
								data: periodsData,
								dataType: "json",
								success: function (response) {
									console.log(response)
								},
								error: function (err) {
									console.debug(err)
								},
							})
						}
					}
				})
			}
		}

		function saveTariffCottageRequest(body) {
			return new Promise((resolve) => {
				$.ajax({
					type: "POST",
					url:
						"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/create_tariffs.php?id=" +
						AMOCRM.constant("account").id +
						"&type_data=hotel",
					headers: {
						"Content-type": "application/json",
					},
					data: body,
					dataType: "json",
					success: function (response) {
						resolve(response)
					},
					error: function (err) {
						console.debug(err)
					},
				})
			})
		}

		function saveTariffSaunaRequest(body) {
			return new Promise((resolve) => {
				$.ajax({
					type: "POST",
					url:
						"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/create_tariffs.php?id=" +
						AMOCRM.constant("account").id +
						"&type_data=bathhouse",
					headers: {
						"Content-type": "application/json",
					},
					data: body,
					dataType: "json",
					success: function (response) {
						resolve(response)
					},
					error: function (err) {
						console.debug(err)
					},
				})
			})
		}

		function saveTariffSauna(saunaCategoriesData) {
			const form = document.getElementById("tariffFormSauna")

			let formData = new FormData(form)

			let error = formValidate(form)

			function formValidate(form) {
				let error = 0
				let formReq = $("#tariffFormSauna ._req")

				for (let i = 0; i < formReq.length; i++) {
					const input = formReq[i]
					formRemoveError(input)

					if (input.value === "") {
						formAddError(input)
						error++
					}
				}
				return error
			}

			function formAddError(input) {
				$(input).addClass("_error")
			}
			function formRemoveError(input) {
				$(input).removeClass("_error")
			}

			if (error > 0) {
				alert("Ключевые поля не заполнены")
			} else {
				let body = {}
				let nameForLayout

				let data = {
					categories: [],
				}

				for (let [name, value] of formData) {
					if (name == "name") {
						body[name] = value
						nameForLayout = value
					} else if (name.includes("price[")) {
						//Надо будет прописать так же tariff_id, но это в complete POST для тарифа
						let category_id = $(`.table2__input[name="${name}"]`).attr(
							"data-category"
						)
						let category = {
							category_id: category_id,
							dates: {},
						}
						if (value != "") {
							category["dates"]["date"] = $(
								`.table2__input[name="${name}"]`
							).attr("data-date")
							category["dates"]["price"] = value
							data["categories"].push(category)
						}
					}
				}

				body = JSON.stringify(body)
				saveTariffSaunaRequest(body).then((response) => {
					$(".saved-container-sauna").prepend(
						'<div class="successText">Успешно создано</div>'
					)
					$(".tariffs-sauna-list").append(`
					<div class="tariffs-sauna-list__container entity-list">
						<p class="tariffs-sauna-list__item" data-id="${response}">${nameForLayout}</p>
						<p class="tariffs-sauna-list__item edit" id="editTariffSauna" data-link="bathhouse" data-id="${response}">[Редактировать]</p>
						<img src="https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/icons/settings/delete.png" class="deleteTrash ctariffs-sauna-list__item" id="deleteTariffItemSauna" data-id="${response}"></img>
					</div>
					`)
					form.reset()
					$('.js-overlay-tarif-sauna').fadeOut()
					$('.js-overlay-tarif-sauna-internal').fadeOut()

					if (data["categories"].length != 0) {
						data["tariff_id"] = response
						data = JSON.stringify(data)
						$.ajax({
							type: "PUT",
							url:
								"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/change_tariffs.php?id=" +
								AMOCRM.constant("account").id +
								"&type_data=bathhouse&type_request=unique_dates",
							headers: {
								"Content-type": "application/json",
							},
							data: data,
							dataType: "json",
							success: function (response) {
								console.log(response)
							},
							error: function (err) {
								console.debug(err)
							},
						})
					}
					if (collectDataPeriodSauna(saunaCategoriesData, response) != undefined) {
						let periodsData = collectDataPeriodSauna(saunaCategoriesData, response)
						if (periodsData["category"].length > 0) {
							periodsData = JSON.stringify(periodsData)
							$.ajax({
								type: "PUT",
								url:
									"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/change_tariffs.php?id=" +
									AMOCRM.constant("account").id +
									"&type_data=bathhouse&type_request=periods",
								headers: {
									"Content-type": "application/json",
								},
								data: periodsData,
								dataType: "json",
								success: function (response) {
									console.log(response)
								},
								error: function (err) {
									console.debug(err)
								},
							})
						}
					}
				})
			}
		}

		function saveGeneralSettings(e) {
			if (e != "") e.preventDefault()

			function getDataId(name) {
				return $($(`.${w_code}-fields-lead .text-input[name="${name}"]`)).attr(
					"data-id"
				)
			}

			function getDataPipeId(name) {
				let dataId = $(
					$(`.${w_code}-fields-lead .text-input[name="${name}"]`)
				).attr("data-id")
				if (
					$(
						`.${w_code}-fields-lead .custom__list-el[data-id="${dataId}"]`
					).attr("data-pipe-id") != undefined
				) {
					return $(
						`.${w_code}-fields-lead .custom__list-el[data-id="${dataId}"]`
					).attr("data-pipe-id")
				} else return ""
			}

			function getDataType(name) {
				let dataId = $(
					$(`.${w_code}-fields-lead .text-input[name="${name}"]`)
				).attr("data-id")
				if (
					$(
						`.${w_code}-fields-lead .custom__list-el[data-id="${dataId}"]`
					).attr("data-type") != undefined
				) {
					return $(
						`.${w_code}-fields-lead .custom__list-el[data-id="${dataId}"]`
					).attr("data-type")
				} else return ""
			}

			function getDataStatuses() {
				let statuses = {
					status_1: {
						id: getDataId("status_1"),
						pipeId: getDataPipeId("status_1"),
						type: getDataType("status_1"),
					},
					status_2: {
						id: getDataId("status_2"),
						pipeId: getDataPipeId("status_2"),
						type: getDataType("status_2"),
					},
					status_3: {
						id: getDataId("status_3"),
						pipeId: getDataPipeId("status_3"),
						type: getDataType("status_3"),
					},
					status_4: {
						id: getDataId("status_4"),
						pipeId: getDataPipeId("status_4"),
						type: getDataType("status_4"),
					},
					status_5: {
						id: getDataId("status_5"),
						pipeId: getDataPipeId("status_5"),
						type: getDataType("status_5"),
					},
				}
				return statuses
			}

			function getDataFields() {
				let fields = {
					price: {
						id: getDataId("price"),
						pipeId: getDataPipeId("price"),
						type: getDataType("price"),
					},
					objectName: {
						id: getDataId("objectName"),
						pipeId: getDataPipeId("objectName"),
						type: getDataType("objectName"),
					},
					arrivalDate: {
						id: getDataId("arrivalDate"),
						pipeId: getDataPipeId("arrivalDate"),
						type: getDataType("arrivalDate"),
					},
					departureDate: {
						id: getDataId("departureDate"),
						pipeId: getDataPipeId("departureDate"),
						type: getDataType("departureDate"),
					},
				}
				return fields
			}

			let error = formValidate()

			function formValidate() {
				let error = 0
				let formReq = $("#generalSettingsForm ._req")

				for (let i = 0; i < formReq.length; i++) {
					const input = formReq[i]
					formRemoveError(input)

					if (input.value === "") {
						formAddError(input)
						error++
					}
				}
				return error
			}

			function formAddError(input) {
				$(input).addClass("_error")
			}
			function formRemoveError(input) {
				$(input).removeClass("_error")
			}

			if (error > 0) {
				alert("Ключевые поля не заполнены")
			} else {
				let body = {
					accountIdAmo: AMOCRM.constant("account").id,
					data: {
						settings: {
							fields: getDataFields(),
							statuses: getDataStatuses(),
						},
					},
				}

				body = JSON.stringify(body)
				return new Promise((resolve) => {
					$.ajax({
						type: "POST",
						url: "https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/save_settings.php?type=settings",
						headers: {
							"Content-type": "application/json",
						},
						data: body,
						dataType: "json",
						success: function (response) {
							resolve(response)
						},
						error: function (err) {
							console.debug(err)
						},
					})
				})
			}
		}

		function getGeneralSettings(accountIdAmo) {
			return new Promise((resolve) => {
				$.ajax({
					type: "GET",
					url:
						"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/get_settings.php?id=" +
						accountIdAmo +
						"&type=settings",
					dataType: "json",
					success: (response) => {
						resolve(response)
					},
					error: function (err) {
						console.debug(err)
					},
				})
			})
		}

		function tariffInfo(tariffId, typeData) {
			return new Promise((resolve, reject) => {
				$.ajax({
					type: "GET",
					url:
						"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/get_tariffs.php?id=" +
						AMOCRM.constant("account").id +
						`&type_data=${typeData}&type_request=object&tariff_id=${tariffId}&with`,
					dataType: "json",
					success: (response) => {
						resolve(response)
					},
					error: function (err) {
						reject(err)
					},
				})
			})
		}

		function getStatusList(pipelines, selectedIds = [], multiSelect = false) {
			let res = `
		<ul class="custom__list hidden custom-scroll ${
			multiSelect ? "multi-select" : ""
		}">
		`
			const automationLangs = langs((data) => data.automation)

			pipelines.forEach((pipe) => {
				let pipeSelected =
					selectedIds.filter((item) => item.split("-")[1] == pipe.id).length ==
					pipe.statuses.length
						? "selected"
						: ""
				res += `
			<p class="subtitle ${pipeSelected}" data-pipe-id="${pipe.id}">${automationLangs.pipeline}: ${pipe.name}</p>
			`
				pipe.statuses.forEach((s) => {
					let selected = selectedIds.includes(s.id + "-" + pipe.id)
						? "selected"
						: ""
					res += `
				<li class="custom__list-el ${selected}" data-name="${s.name}"
										data-id="${s.id}" 
										data-pipe-id="${pipe.id}"
										data-pipe-name="${pipe.name}">
					${s.name}
				</li>
				`
				})
			})

			res += "</ul>"
			return res
		}

		function langs(callback) {
			return callback ? callback(self.langs.advanced) : self.langs.advanced
		}

		function cancelData(e) {
			console.log("Я захожу в cancelData")

			if (
				$(this)
					.parent()
					.find(`.${w_code}-btn__save`)
					.is(".button-input-disabled")
			)
				return
			let dataG = decodeURIComponent(
					$(`#work-area-${w_code} #data-${w_code}`).attr("data-old")
				),
				cont = $(`#work-area-${w_code}`),
				navActiveType = cont.find(".navbar.active").attr("data-link")
			dataG = JSON.parse(dataG).data
			cont.children().remove()
			$(`.btn-cont.${w_code}`).remove()
			initAdvancedSettings(dataG, navActiveType)
		}

		function saveDataSimple(data) {
			let body = JSON.stringify(data)
			$.ajax({
				type: "POST",
				url: "https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/save_settings.php",
				headers: {
					"Content-type": "application/json",
				},
				data: body,
				dataType: "json",
				success: function (response) {
					if (response.status != "success") {
						console.debug(response)
					}
				},
				error: function (err) {
					console.debug(err)
				},
			})
		}

		function cottageCategories(accountIdAmo) {
			return new Promise((resolve, reject) => {
				$.ajax({
					type: "GET",
					url:
						"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/get_categories.php?id=" +
						accountIdAmo +
						"&type_data=hotel&type_request=search&facilities&tariff_id",
					dataType: "json",
					success: (response) => {
						resolve(response)
					},
					error: function (err) {
						reject(err)
					},
				})
			})
		}

		function saunaCategories(accountIdAmo) {
			return new Promise((resolve, reject) => {
				$.ajax({
					type: "GET",
					url:
						"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/get_categories.php?id=" +
						accountIdAmo +
						"&type_data=bathhouse&type_request=search&facilities&tariff_id",
					dataType: "json",
					success: (response) => {
						resolve(response)
					},
					error: function (err) {
						reject(err)
					},
				})
			})
		}

		function getSettingsData(accountIdAmo) {
			return new Promise((resolve, reject) => {
				$.ajax({
					type: "GET",
					url:
						"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/get_settings.php?id=" +
						accountIdAmo,
					dataType: "json",
					success: (response) => {
						resolve(response)
					},
					error: function (err) {
						reject(err)
					},
				})
			})
		}

		function getTariffsBathhouseData(accountIdAmo) {
			return new Promise((resolve, reject) => {
				$.ajax({
					type: "GET",
					url:
						"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/get_tariffs.php?id=" +
						accountIdAmo +
						"&type_data=bathhouse&type_request=search&with",
					dataType: "json",
					success: (response) => {
						resolve(response)
					},
					error: function (err) {
						reject(err)
					},
				})
			})
		}

		function getTariffsHotelData(accountIdAmo) {
			return new Promise((resolve, reject) => {
				$.ajax({
					type: "GET",
					url:
						"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/get_tariffs.php?id=" +
						accountIdAmo +
						"&type_data=hotel&type_request=search&with",
					dataType: "json",
					success: (response) => {
						resolve(response)
					},
					error: function (err) {
						reject(err)
					},
				})
			})
		}

		function getPipelines() {
			return new Promise((resolve) => {
				$.ajax({
					type: "GET",
					url: "/api/v4/leads/pipelines",
					success: (data) => {
						let res = []
						data._embedded.pipelines.forEach((el) => {
							let statusArr = []
							el._embedded.statuses.forEach((s) => {
								s.type == 0 &&
									statusArr.push({
										id: s.id,
										name: s.name,
									})
							})
							res.push({
								id: el.id,
								name: el.name,
								statuses: statusArr,
							})
						})
						resolve(res)
					},
				})
			})
		}

		function getSaveBtnHtml() {
			const recordLangs = langs((data) => data.record)
			return `
		<div class="btn-cont ${w_code}">
			<div class="${w_code}-btn__cancel button-input button-cancel">${recordLangs.cancelChanges}</div>
			<div class="${w_code}-btn__save button-input button-input-disabled">
				${recordLangs.save}
				<div class="loader-cont">
					<div class="loader"></div>
				</div>
			</div>
		</div>`
		}

		function collectDataPeriodCottage(cottageCategoriesData, tariff_id = "") {
			let error = formValidate()

			function formValidate() {
				let error = 0
				let formReq = $(".form__period-cottage ._req")

				for (let i = 0; i < formReq.length; i++) {
					const input = formReq[i]
					formRemoveError(input)

					if (input.value === "") {
						formAddError(input)
						error++
					}
				}
				return error
			}

			function formAddError(input) {
				$(input).addClass("_error")
			}
			function formRemoveError(input) {
				$(input).removeClass("_error")
			}

			if (error > 0) {

			} else {
				let periods = {
					tariff_id: tariff_id,
					from: $('.date-cottage[name="from"]').val(),
					to: $('.date-cottage[name="to"]').val(),
					category: [],
				}

				cottageCategoriesData.forEach(function (item) {
					let category_id = item.category_id
					let category = {}

					$(`.table2__input[data-category-period="${category_id}"]`).each(function () {
						if ($(this).val() != "") {
							let dataWeek = $(this).attr("data-week")
							if (dataWeek != "allDays") {
								category["category_id"] = category_id
								category[dataWeek] = $(this).val()
							}
						}
					})
					if (category["category_id"]) {
						periods["category"].push(category)
					}
				})
				return periods
			}
		}

		function collectDataPeriodSauna(saunaCategoriesData, tariff_id = "") {
			let error = formValidate()

			function formValidate() {
				let error = 0
				let formReq = $(".form__period-sauna ._req")

				for (let i = 0; i < formReq.length; i++) {
					const input = formReq[i]
					formRemoveError(input)

					if (input.value === "") {
						formAddError(input)
						error++
					}
				}
				return error
			}

			function formAddError(input) {
				$(input).addClass("_error")
			}
			function formRemoveError(input) {
				$(input).removeClass("_error")
			}

			if (error > 0) {
			} else {
				let periods = {
					tariff_id: tariff_id,
					from: $('.date-sauna[name="from"]').val(),
					to: $('.date-sauna[name="to"]').val(),
					category: [],
				}

				saunaCategoriesData.forEach(function (item) {
					let category_id = item.category_id
					let category = {}

					$(`.table2__input[data-category-period="${category_id}"]`).each(function () {
						if ($(this).val() != "") {
							let dataWeek = $(this).attr("data-week")
							if (dataWeek != "allDays") {
								category["category_id"] = category_id
								category[dataWeek] = $(this).val()
							}
						}
					})
					if (category["category_id"]) {
						periods["category"].push(category)
					}
				})
				return periods
			}
		}

		function changeNavbar(el, postfix) {
			if (el.is(".active")) return
			$(`.navbar${postfix}`).find(".active").removeClass("active")
			el.addClass("active")
			let type = el.attr("data-link")

			$(`.wrap-entity${postfix}>*`).each((i, item) => {
				if ($(item).is(`.${type}__entity${postfix}`))
					$(item).removeClass("hidden")
				else $(item).addClass("hidden")
			})
		}

		async function initAdvancedSettings() {
			await cottageCategories(AMOCRM.constant("account").id).then(
				(data) => (cottageCategoriesData = data)
			).catch(
				() => (cottageCategoriesData = '')
			)
			await saunaCategories(AMOCRM.constant("account").id).then(
				(data) => (saunaCategoriesData = data)
			).catch(
				() => (saunaCategoriesData = '')
			)
			await getTariffsBathhouseData(AMOCRM.constant("account").id).then(
				(data) => (bathhouseTariffs = data)
			).catch(
				() => (bathhouseTariffs = '')
			)
			await getTariffsHotelData(AMOCRM.constant("account").id).then(
				(data) => (hotelTariffs = data)
			).catch(
				() => (hotelTariffs = '')
			)

			await getGeneralSettings(AMOCRM.constant("account").id).then(
				(value) => (data = value)
			).catch(
				(err) => (console.log(err))
			)
			await getPipelines().then((data) => (pipelines = data)).catch(
				(err) => (console.log(err))
			)

			getAdvancedSettings(
				data,
				pipelines,
				bathhouseTariffs,
				hotelTariffs,
				cottageCategoriesData,
				saunaCategoriesData
			)
		}

		async function initTariffsSettings() {
			await cottageCategories(AMOCRM.constant("account").id).then(
				(data) => (cottageCategoriesData = data)
			).catch(
				() => (cottageCategoriesData = '')
			)

			await saunaCategories(AMOCRM.constant("account").id).then(
				(data) => (saunaCategoriesData = data)
			).catch(
				() => (saunaCategoriesData = '')
			)

			await getTariffsBathhouseData(AMOCRM.constant("account").id).then(
				(data) => (bathhouseTariffs = data)
			).catch(
				() => (bathhouseTariffs = '')
			)
			await getTariffsHotelData(AMOCRM.constant("account").id).then(
				(data) => (hotelTariffs = data)
			).catch(
				() => (hotelTariffs = '')
			)

			getPriceTariffs(cottageCategoriesData, bathhouseTariffs, hotelTariffs, saunaCategoriesData)
		}

		this.callbacks = {
			render: function () {
				settings = self.get_settings()
				w_code = settings.widget_code
				initStyle(advancedSettingsStyle)
				initConstArr()
				return true
			},
			init: function () {
				return true
			},
			bind_actions: function () {
				return true
			},
			settings: function () {
				return true
			},
			onSave: function () {
				return true
			},
			destroy: function () {},
			advancedSettings: function () {
				initAdvancedSettings()

				let cont = $(`#work-area-${w_code}`)

				$("body").on("click", ".cont .text-input", function (e) {
					e.stopPropagation()
					cont.find(".cont .custom__list").removeClass("hidden")
					$(this).closest(".cont").find(".custom__list").toggleClass("hidden")
				})

				$("body").on(
					"click",
					".custom__list:not(.multi-select) .custom__list-el",
					function (e) {
						let id = $(this).attr("data-id"),
							name = $(this).attr("data-name"),
							type = $(this).attr("data-type"),
							input = $(this).closest(".cont").find("input")
						input.val(name)
						input.attr("data-id", id)
						input.attr("data-type", type)
						if ($(this).is(".auto-settings__list-el .custom__list-el")) {
							let pipeId = $(this).attr("data-pipe-id")
							input.attr("data-pipe-id", pipeId)
						}
						input.trigger("input")
						$(this).closest(".custom__list").addClass("hidden")
					}
				)

				//navbars
				$("body").on("click", ".navbar>*", function (e) {
					let dataLink = $(this).attr("data-link")
					if (dataLink == "price-tariffs") {
						if ($(".price-tariffs__entity").children().length == 0) {
							initTariffsSettings()
						} else {
							$(".price-tariffs__entity").empty()
							initTariffsSettings()
						}
					}
					changeNavbar($(this), "")
				})
				$("body").on("click", ".navbar-internal>*", function (e) {
					changeNavbar($(this), "-internal")
				})
				$("body").on("click", ".navbar-popup>*", function (e) {
					if ($(this).attr("data-link") === "conveniences") {
						$(`.js-popup`).css({
							top: "80%",
							transform: "translate(-50%, -80%)",
							"overflow-y": "scroll",
							height: "85%",
						})
						$(`.js-popup-edit`).css({
							top: "80%",
							transform: "translate(-50%, -80%)",
							"overflow-y": "scroll",
							height: "85%",
						})
					} else {
						$(`.js-popup`).css({
							top: "50%",
							transform: "translate(-50%, -50%)",
							"overflow-y": "hidden",
							height: "auto",
						})
						$(`.js-popup-edit`).css({
							top: "50%",
							transform: "translate(-50%, -50%)",
							"overflow-y": "hidden",
							height: "auto",
						})
					}
					changeNavbar($(this), "-popup")
				})

				$("body").on("click", ".navbar-popup-sauna>*", function (e) {
					if ($(this).attr("data-link") == "сonveniences-sauna") {
						$(`.js-popup-sauna`).css({
							top: "80%",
							transform: "translate(-50%, -80%)",
							"overflow-y": "scroll",
							height: "85%",
						})
						$(`.js-popup-edit-bathhouse`).css({
							top: "80%",
							transform: "translate(-50%, -80%)",
							"overflow-y": "scroll",
							height: "85%",
						})
					} else {
						$(`.js-popup-sauna`).css({
							top: "50%",
							transform: "translate(-50%, -50%)",
							"overflow-y": "hidden",
							height: "auto",
						})
						$(`.js-popup-edit-bathhouse`).css({
							top: "50%",
							transform: "translate(-50%, -50%)",
							"overflow-y": "hidden",
							height: "auto",
						})
					}
					changeNavbar($(this), "-popup-sauna")
				})

				$("body").on("input", ".cont .text-input", () =>
					$(`.${w_code}-btn__save`).removeClass(
						".button-input button-input-disabled"
					)
				)

				// save btn
				$(`body`).on("click", `.${w_code}-btn__save`, (e) =>
					saveGeneralSettings(e)
				)

				// cancel btn
				$(`body`).on("click", `.${w_code}-btn__cancel`, cancelData)

				// clear btn
				$("body").on("input", ".cont .text-input", function (e) {
					if ($(this).attr("data-id") != "")
						$(this).parent().find(".clear__btn").addClass("active")
					else $(this).parent().find(".clear__btn").removeClass("active")
				})
				$("body").on("click", ".cont .clear__btn", function (e) {
					let input = $(this).parent().find("input")
					input.val("")
					input.attr("data-id", "")
					input.trigger("input")
					$(this).removeClass("active")
					$(this).parent().find(".selected").removeClass("selected")
				})

				// popup для Категории Объектов
				$("body").on("click", "#add-category", function (e) {
					$(`.js-overlay`).fadeIn()
				})
				$("body").on("click", ".js-close-popup", function (e) {
					$(`.js-overlay`).fadeOut()
				})
				$("body").on("click", ".js-close-popup-edit", function (e) {
					$(`.js-overlay-edit`).fadeOut()
				})
				$("body").on("click", ".js-close-popup-edit-bathhouse", function (e) {
					$(`.js-overlay-edit-bathhouse`).fadeOut()
				})
				$("body").on("click", ".js-close-popup-tariff-cottage-edit", function (e) {
					$(`.js-overlay-tariff-cottage-edit`).fadeOut()
				})
				$(document).mouseup(function (e) {
					let popup = $(`.js-popup`)
					if (e.target != popup[0] && popup.has(e.target).length === 0) {
						$(`.js-overlay`).fadeOut()
					}
				})

				$("body").on("click", "#add-category-sauna", function (e) {
					$(`.js-overlay-sauna`).fadeIn()
				})
				$("body").on("click", ".js-close-popup-sauna", function (e) {
					$(`.js-overlay-sauna`).fadeOut()
				})
				$(document).mouseup(function (e) {
					let popup = $(`.js-popup-sauna`)
					if (e.target != popup[0] && popup.has(e.target).length === 0) {
						$(`.js-overlay-sauna`).fadeOut()
					}
				})

				// popup для Ценовых Тарифов
				$("body").on("click", "#addTariff", function (e) {
					let postfix = $(this).attr("data-link")
					$(`.js-overlay${postfix}`).fadeIn()
				})
				$("body").on("click", ".js-close-popup-tarif-sauna", function (e) {
					$(".js-overlay-tarif-sauna").fadeOut()
				})
				$("body").on(
					"click",
					".js-close-popup-tarif-sauna-internal",
					function (e) {
						$(".js-overlay-tarif-sauna-internal").fadeOut()
					}
				)
				$("body").on("click", ".js-close-popup-tarif-cottage", function (e) {
					$(".js-overlay-tarif-cottage").fadeOut()
				})
				$("body").on("click", ".js-close-popup-tarif-cottage-internal", function (e) {
						$(".js-overlay-tarif-cottage-internal").fadeOut()
					}
				)
				$("body").on("click", ".js-close-popup-tarif-cottage-edit-internal", function (e) {
					$(".js-overlay-tarif-cottage-edit-internal").fadeOut()
				}
			)

				//Логика для категории Удобства во всплывающем окне
				$("body").on("change", ".conveniences-group-item", function (e) {
					let valueItem = $(e.target).attr("data-item-id")
					if ($(this).is(":checked")) {
						if ($(this).attr("data-item-id") == 1 && $(this).attr('data-ploshad') != 'false') {
							$(`.conveniences_value[data-value-id="${valueItem}"]`).removeAttr("hidden")
						} else {
							$(`.conveniences_value[data-value-id="${valueItem}"]`).val("true")
						}
					} else {
						if ($(this).attr("data-item-id") == 1 && $(this).attr('data-ploshad') != 'false') {
							$(`.conveniences_value[data-value-id="${valueItem}"]`).attr("hidden", "true")
						} else {
							$(`.conveniences_value[data-value-id="${valueItem}"]`).val("false")
						}
					}
				})

				$("body").on("change", ".conveniences-group", function (e) {
					let valueGroup = $(e.target).attr("data-group-id")
					if ($($(this)).is(":checked")) {
						if (valueGroup == 1 && $(this).attr('data-ploshad') != 'false') {
							$(`.conveniences_value[data-value-id="1"]`).removeAttr("hidden")
						}

						$(`.conveniences-group-item[data-item-group="${valueGroup}"]`).prop("checked", "true")

						for (let i = 0; i < $(`.conveniences-group-item[data-item-group="${valueGroup}"]`).length; i++) {
							let dataItemId = $($(`.conveniences-group-item[data-item-group="${valueGroup}"]`)[i]).attr("data-item-id")
							$(`[data-value-id="${dataItemId}"]`).val("true")
						}
					} else {
						if (valueGroup == 1 && $(this).attr('data-ploshad') != 'false') { 
							$(`.conveniences_value[data-value-id="1"]`).attr("hidden", "true")
						}

						$(`.conveniences-group-item[data-item-group="${valueGroup}"]`).removeAttr("checked")

						for (let i = 0; i < $(`.conveniences-group-item[data-item-group="${valueGroup}"]`).length; i++) {
							let dataItemId = $($(`.conveniences-group-item[data-item-group="${valueGroup}"]`)[i]).attr("data-item-id")
							$(`[data-value-id="${dataItemId}"]`).val("false")
						}
					}
				})

				//Preview в категории Фотографии
				$("body").on("change", "#formImage", (e) => {
					if (
						$("#formPreview").children(".form__preview__wrap").length === 11
					) {
						alert("Нельзя загружать более 11 фотографий.")
						$("#formImage").attr("disabled", "true")
						return
					}
					preview($("#formImage")[0].files[0])
					//addCategoryCottage('', $('#formImage')[0].files[0])
				})

				$("body").on("change", "#formImageSauna", (e) => {
					if (
						$("#formPreviewSauna").children(".form__preview__wrap").length ===
						11
					) {
						alert("Нельзя загружать более 11 фотографий.")
						$("#formImageSauna").attr("disabled", "true")
						return
					}
					preview($("#formImageSauna")[0].files[0], "Sauna")
					//addCategorySauna('', $('#formImage')[0].files[0])
				})

				$("body").on("click", "#deleteImage", function (e) {
					$(this).prev().remove()
					$(this).parent().remove()
					$("#formImage")[0].value = ""
					$("#formImage").removeAttr("disabled")
					$(this).remove()
				})
				$("body").on("click", "#deleteImageSauna", function (e) {
					$(this).prev().remove()
					$(this).parent().remove()
					$("#formImageSauna")[0].value = ""
					$("#formImageSauna").removeAttr("disabled")
					$(this).remove()
				})

				//Блокирование временных промежутков
				$("body").on("change", "#blockTimeIntervals", function (e) {
					if ($(this).is(":checked")) {
						$("#addTimeBlock").removeClass("hidden")
						$("#addTimeBlock").removeAttr("disabled")
						$(".time-block-wrap").removeClass("hidden")
					} else {
						$("#addTimeBlock").addClass("hidden")
						$("#addTimeBlock").attr("disabled", "true")
						$(".time-block-wrap").addClass("hidden")
					}
				})

				$("body").on("change", "#blockTimeIntervalsEdit", function (e) {
					if ($(this).is(":checked")) {
						$("#addTimeBlockEdit").removeClass("hidden")
						$("#addTimeBlockEdit").removeAttr("disabled")
						$(".time-block-wrap-edit").removeClass("hidden")
					} else {
						$("#addTimeBlockEdit").addClass("hidden")
						$("#addTimeBlockEdit").attr("disabled", "true")
						$(".time-block-wrap-edit").addClass("hidden")
					}
				})

				$("body").on("click", "#addTimeBlockEdit", (e) => addTimeBlock(e))

				$("body").on("click", "#addTimeBlock", (e) => addTimeBlock(e))

				$("body").on("click", "#deleteTimeBlock", function (e) {
					$(this).parent().remove()
				})

				//Отправка формы категорий
				$("body").on("click", "#sendCategoryCottage", (e) => {
					if (!$("#sendCategoryCottage").hasClass("button-input-disabled"))
						addCategoryCottage(e)
				})
				$("body").on("click", "#sendEditCategoryCottage", (e) => {
					if (!$("#sendEditCategoryCottage").hasClass("button-input-disabled")) {
						let categoryId = $(e.target).attr('data-id')
						addCategoryCottage(e, categoryId)
					}
				})
				$("body").on("click", "#sendCategorySauna", (e) => {
					if (!$("#sendCategorySauna").hasClass("button-input-disabled"))
						addCategorySauna(e)
				})

				$("body").on("click", "#sendEditCategorySauna", (e) => {
					if (!$("#sendEditCategorySauna").hasClass("button-input-disabled")) {
						let categoryId = $(e.target).attr('data-id')
						addCategorySauna(e, categoryId)
					}
				})

				//Отправка формы тарифа
				$("body").on("click", "#saveTariffCottage", async function (e) {
					if (!$("#saveTariffCottage").hasClass("button-input-disabled")) {
						await cottageCategories(AMOCRM.constant("account").id).then(
							(data) => (cottageCategoriesData = data)
						)
						saveTariffCottage(cottageCategoriesData, e)
					}
				})

				$("body").on("click", "#saveTariffCottageEdit", async function (e) {
					if (!$("#saveTariffCottageEdit").hasClass("button-input-disabled")) {
						await cottageCategories(AMOCRM.constant("account").id).then(
							(data) => (cottageCategoriesData = data)
						)
						saveTariffCottage(cottageCategoriesData, e)
					}
				})

				$("body").on("click", "#saveTariffSauna", async function () {
					if (!$("#saveTariffSauna").hasClass("button-input-disabled")) {
						await saunaCategories(AMOCRM.constant("account").id).then(
							(data) => (saunaCategoriesData = data)
						)
						saveTariffSauna(saunaCategoriesData)
					}
				})

				//Изменить цены на период
				$("body").on("click", "#changePriceForPeriod", function () {
					let postfix = $(this).attr("data-link")
					let idTariff = $(this).attr('data-tariff')
					$(`.js-overlay-tarif-${postfix}-internal`).fadeIn()
					console.log($(`.js-overlay-tarif-${postfix}-internal #addPeriod`).length);
					$(`.js-overlay-tarif-${postfix}-internal #addPeriod`).attr('data-tariff', idTariff)
				})

				$("body").on("click", "#addPeriod", async function () {
					let idTariff = $(this).attr('data-tariff')
					let typeData = $(this).attr('data-link')
					if(typeData = 'hotel') {
						await cottageCategories(AMOCRM.constant("account").id).then(
							(data) => (cottageCategoriesData = data)
						)
						console.log(collectDataPeriodCottage(cottageCategoriesData, idTariff));
						if (collectDataPeriodCottage(cottageCategoriesData, idTariff) != undefined) {
							let periodsData = collectDataPeriodCottage(cottageCategoriesData, idTariff)
							if (periodsData["category"].length > 0) {
								periodsData = JSON.stringify(periodsData)
								$.ajax({
									type: "PUT",
									url:
										"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/change_tariffs.php?id=" +
										AMOCRM.constant("account").id +
										`&type_data=${typeData}&type_request=periods`,
									headers: {
										"Content-type": "application/json",
									},
									data: periodsData,
									dataType: "json",
									success: function (response) {
										console.log(response)
									},
									error: function (err) {
										console.debug(err)
									},
								})
							}
						}
					} else {
						await saunaCategories(AMOCRM.constant("account").id).then(
							(data) => (saunaCategoriesData = data)
						)
						if (collectDataPeriodCottage(saunaCategoriesData, idTariff) != undefined) {
							let periodsData = collectDataPeriodCottage(saunaCategoriesData, idTariff)
							if (periodsData["category"].length > 0) {
								periodsData = JSON.stringify(periodsData)
								$.ajax({
									type: "PUT",
									url:
										"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/change_tariffs.php?id=" +
										AMOCRM.constant("account").id +
										`&type_data=${typeData}&type_request=periods`,
									headers: {
										"Content-type": "application/json",
									},
									data: periodsData,
									dataType: "json",
									success: function (response) {
										console.log(response)
									},
									error: function (err) {
										console.debug(err)
									},
								})
							}
						}
					}
					
				})

				//Список категорий
				$("body").on("click", "#deleteCategoryItemCottage", function () {
					let idCategory = $(this).attr("data-id")
					$(this).parent().remove()
					return new Promise((resolve) => {
						$.ajax({
							type: "DELETE",
							url:
								"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/delete_objects.php?id=" +
								AMOCRM.constant("account").id +
								"&type_data=hotel&type_object=category&object_id=" +
								idCategory,
							headers: {
								"Content-type": "application/json",
							},
							dataType: "json",
							success: function (response) {
								resolve(response)
							},
							error: function (err) {
								console.debug(err)
							},
						})
					})
				})

				$("body").on("click", "#deleteCategoryItemSauna", function () {
					let idCategory = $(this).attr("data-id")
					$(this).parent().remove()
					return new Promise((resolve) => {
						$.ajax({
							type: "DELETE",
							url:
								"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/delete_objects.php?id=" +
								AMOCRM.constant("account").id +
								"&type_data=bathhouse&type_object=category&object_id=" +
								idCategory,
							headers: {
								"Content-type": "application/json",
							},
							dataType: "json",
							success: function (response) {
								resolve(response)
							},
							error: function (err) {
								console.debug(err)
							},
						})
					})
				})

				//Список тарифов
				$("body").on("click", "#deleteTariffItemCottage", function () {
					let idTariff = $(this).attr("data-id")
					$(this).parent().remove()
					return new Promise((resolve) => {
						$.ajax({
							type: "DELETE",
							url:
								"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/delete_objects.php?id=" +
								AMOCRM.constant("account").id +
								"&type_data=hotel&type_object=tariff&object_id=" +
								idTariff,
							headers: {
								"Content-type": "application/json",
							},
							dataType: "json",
							success: function (response) {
								resolve(response)
							},
							error: function (err) {
								console.debug(err)
							},
						})
					})
				})

				$("body").on("click", "#deleteTariffItemSauna", function () {
					let idTariff = $(this).attr("data-id")
					$(this).parent().remove()
					return new Promise((resolve) => {
						$.ajax({
							type: "DELETE",
							url:
								"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/delete_objects.php?id=" +
								AMOCRM.constant("account").id +
								"&type_data=bathhouse&type_object=tariff&object_id=" +
								idTariff,
							headers: {
								"Content-type": "application/json",
							},
							dataType: "json",
							success: function (response) {
								resolve(response)
							},
							error: function (err) {
								console.debug(err)
							},
						})
					})
				})

				$("body").on("click", "#editCategory", function () {
					let idCategory = $(this).attr("data-id")
					let typeObject = $(this).attr("data-link")
					getTariffsHotelData(AMOCRM.constant("account").id).then(
						(data) => (hotelTariffs = data)
					)
					$(".js-overlay-edit").fadeIn()
					$.ajax({
						type: "GET",
						url:
							"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/get_categories.php?id=" +
							AMOCRM.constant("account").id +
							`&type_data=${typeObject}&type_request=object&category_id=${idCategory}`,
						dataType: "json",
						success: function (response) {
							editWindowCategory(response, hotelTariffs)
						},
						error: function (err) {
							console.debug(err)
						},
					})
				})

				$("body").on("click", "#editCategoryBathhouse", function () {
					let idCategory = $(this).attr("data-id")
					let typeObject = $(this).attr("data-link")
					getTariffsBathhouseData(AMOCRM.constant("account").id).then(
						(data) => (bathhouseTariffs = data)
					)
					$(".js-overlay-edit-bathhouse").fadeIn()
					$.ajax({
						type: "GET",
						url:
							"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/get_categories.php?id=" +
							AMOCRM.constant("account").id +
							`&type_data=${typeObject}&type_request=object&category_id=${idCategory}`,
						dataType: "json",
						success: function (response) {
							editWindowCategoryBathhouse(response, bathhouseTariffs)
						},
						error: function (err) {
							console.debug(err)
						},
					})
				})

				$("body").on("click", "#editTariff", function () {
					let idTariff = $(this).attr("data-id")
					let typeObject = $(this).attr("data-link")

					$(".js-overlay-tariff-cottage-edit").fadeIn()
					$.ajax({
						type: "GET",
						url:
							"https://myrubikon.tech/_amocrm/our_catalog/widgets_data/booking/get_tariffs.php?id=" +
							AMOCRM.constant("account").id +
							`&type_data=${typeObject}&type_request=object&tariff_id=${idTariff}&with=uniquedates`,
						dataType: "json",
						success: function (response) {
							editWindowTariff(response, idTariff)
						},
						error: function (err) {
							console.debug(err)
						},
					})
				})

				return true
			},
			contacts: {selected: function () {}},
			leads: {selected: function () {}},
			tasks: {selected: function () {}},
		}

		return this
	}
})
