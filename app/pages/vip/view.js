
const React = require('react');
const Page = require('nordic/page');
const Head = require('nordic/head');

const VipContainer = require('../../container/vipContainer');
const FormComponent = require('../../components/FormComponent');


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
      <Head>
      <title>
          "Vip Page"
        </title>
      </Head>
      {/* <VipContainer>
       {'HOLA ROLO'}
      </VipContainer> */}
      <FormComponent />

    </Page>
  )
}

module.exports = View;
