import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import JobsList from "./components/jobslist";
import localeEsMessages from './locales/es';
import localeEnMessages from './locales/en';

const language = navigator.language || navigator.userLanguage;
const messages = {
    'es': localeEsMessages,
    'en': localeEnMessages
}
const localeMessages = messages[language.split('-')[0]] || messages['en'];

ReactDOM.render(
    <IntlProvider locale={language} messages= {localeMessages}>
        <JobsList />
    </IntlProvider>, document.getElementById("root")
);
