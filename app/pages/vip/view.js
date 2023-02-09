
const React = require('react');
const Page = require('nordic/page');
const Head = require('nordic/head');
const Script = require('nordic/script');
const serialize = require('serialize-javascript');

const VipContainer = require('../../container/formContainer');
const FormContainer = require('../../container/formContainer');


function View(props) {
  const { i18n, translations, site, siteId, lowEnd, deviceType, company, imagesPrefix, button } = props;
  const preloadedState = {
    i18n,
    translations,
    site,
    siteId,
    lowEnd,
    deviceType,
    company,
    imagesPrefix,
    button,
  };

  return (
    <Page
      name="vip"
      className="vipContainer"
      state={preloadedState}
    >
      <Script>
        {`
          window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })};
          console.log('VIP page is loaded!');
        `}
      </Script>
      <Script src="vendor.js" />
      <Script src="vip.js" />
      <Head>
      <title>
          "Vip Page"
        </title>
      </Head>
      {/* <VipContainer>
       {'HOLA ROLO'}
      </VipContainer> */}
      <FormContainer />

      

    </Page>
  )
}

module.exports = View;
