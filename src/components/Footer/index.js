import React from 'react';

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-container'>
                <div className='footer-container__logo'>
                    <a href="/"><img className='footer-container__logo__img' src="https://igo4-darwin-test.mbspreview.com/app/dlg/assets/addons/dlg/dlg/darwin-theme/resources/img/logo_wo.svg?v=1659530739" alt="Logo"/></a>
                    <a href="/"><img className='footer-container__logo__stars' src="https://igo4-darwin-test.mbspreview.com/app/dlg/assets/addons/dlg/dlg/darwin-theme/resources/img/defaqto.png?v=1659530739" alt=""/></a>
                </div>
                <div className='footer-container__text'>
                    <div className='footer-container__description'>
                        <p className='footer-container__text__policy'>Darwin® insurance policies are underwritten by U K Insurance Limited and arranged and administered by iGO4 Limited.</p>
                        <p className='footer-container__text__contact'>Registered office: iGO4 House, Staniland Way, Peterborough PE4 6JT. Registered in England and Wales no. 5095154. iGO4 Limited is authorised and regulated by the Financial Conduct Authority, Registration Number 536726. The Financial Services Register can be accessed through
                            <a href="https://www.fca.org.uk"> www.fca.org.uk</a>.<br/>
                            Darwin® is a registered trade mark of U K Insurance Limited.
                        </p>
                    </div>
                    <div className='footer-container__links'>
                        <p>Quick links</p>
                        <ul>
                            <li><a href="https://media.insureradmin.com/darwin/docs/privacynotice.pdf">Security and Privacy</a></li>
                            <li><a href="https://igo4-darwin-test.mbspreview.com/help">Contact us</a></li>
                            <li><a href="https://igo4-darwin-test.mbspreview.com/documents">iGO4 Arrangement</a></li>
                            <li><a href="https://igo4-darwin-test.mbspreview.com/documents">Agreement</a></li>
                            <li><a href="https://igo4-darwin-test.mbspreview.com/documents">Policy Booklet</a></li>
                            {/*<li>Cookies</li>*/}
                        </ul>
                    </div>
                    <div className='footer-container__links'>
                        <p>Car Insurance</p>
                        <ul>
                            <li><a href="https://secure.darwin-insurance.com/igo4dlg/portalrecall.launch?qsid=portal&PolicyType=PC&brandName=default">Existing customers</a></li>
                            <li><a href="https://secure.darwin-insurance.com/igo4dlg/portalrecall.launch?qsid=portal&PolicyType=PC&brandName=default">Manage my policy</a></li>
                            <li><a href="https://igo4-darwin-test.mbspreview.com/make-a-claim">Make a claim</a></li>
                            <li><a href="https://secure.darwin-insurance.com/igo4dlg/portalrecall.launch?qsid=portal&PolicyType=PC&brandName=default">Upload documents</a></li>
                        </ul>
                    </div>
                    <div className='media'>
                        <p className='footer-container__text__policy'>Darwin® insurance policies are underwritten by U K Insurance Limited and arranged and administered by iGO4 Limited.</p>
                        <p className='footer-container__text__contact'>Registered office: iGO4 House, Staniland Way, Peterborough PE4 6JT. Registered in England and Wales no. 5095154. iGO4 Limited is authorised and regulated by the Financial Conduct Authority, Registration Number 536726. The Financial Services Register can be accessed through
                            <a href="https://www.fca.org.uk"> www.fca.org.uk</a>.<br/>
                            Darwin® is a registered trade mark of U K Insurance Limited.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;