export const AzureNAA = () => {
    return (
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="col-span-full xl:col-span-2">
           
        </div>
        <div className="text-center lg:text-start space-y-6">
          <main>
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                <strong>Using Azure AD / Entra ID accounts (Microsoft) with Focaline</strong>
              </span>{" "}
              </h1>
              <p>
                If you're signing up to Focaline using a Microsoft account issued by your school or organization, there's a chance you'll receive an error called "Needs admin approval".
                <br />
                This error is a security precaution put in place by Microsoft and is caused by a few things:
                <br />
                <br />
                <ul>
                    <li><strong>(1)</strong> <i>Dombestein Data, the developer of Focaline, does currently not have an active verified developer partnership with Microsoft</i></li>
                    <li><strong>(2)</strong> <i>Focaline has not yet been verified by Microsoft</i></li>
                    <li><strong>(3)</strong> <i>Focaline is a new app and has recently been registered in Microsoft's systems</i></li>
                </ul>
                <br />
                Because of this, Focaline has to be aproved by your company or school's IT department in their Azure Entra ID dashboard. Please have them contact <a href="mailto:isak@dombesteindata.net">isak@dombesteindata.net</a> for further information.
              </p>
              <br />
              <hr />
              <br />
              <h1 className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text"><b>FAQ</b></h1>
              <br/>
              <p><b>Why do you not have a verified developer partnership with Microsoft if you provide "Sign in with Microsoft" as a sign on method?</b></p>
              <p>We understand that this might sound a bit weird, but this is due to financial reasons. Currently, Dombestein Data is a one man tean, and Focaline is still in early development. We are actively working on checking off every box required to be a verified developer in Microsoft's systems, but this requires time and a lot of money. Once everything is good to go, we should hopefully be able to grant everyone access to Focaline without any further problems.</p>
              <br/>
              <p><b>What exactly does this error mean? Could you elaborate?</b></p>
              <p>"Needs admin approval" is a security precaution put in place by Microsoft. To work as intended, Focaline has to request a set of permissions from Microsoft to fetch the required data about you and use them in our systems. Some of these permissions, a standard user unfortunately cannot grant on their own, and requires an administrator to grant these before any users on that domain is allowed to register. If you're an Entra ID Admin for your organization, the current scope of Permision Claim Values are;</p>
              <ul>
                <li><strong>(1)</strong> <i>Microsoft Graph - email</i></li>
                <li><strong>(2)</strong> <i>Microsoft Graph - profile</i></li>
                <li><strong>(3)</strong> <i>Microsoft Graph - User.Read</i></li>
                <li><strong>(4)</strong> <i>Microsoft Graph - openid</i></li>
              </ul>
              <br />
              Under "App Registration" and "Token Configuration", these should be
              <ul>
                <li><strong>(1)</strong> <i>email</i></li>
                <li><strong>(2)</strong> <i>family_name (last name)</i></li>
                <li><strong>(3)</strong> <i>given_name (first name)</i></li>
              </ul>
              <br />
              <p><b>Does this also affect personal @outlook.com and @hotmail.com accounts?</b></p>
              <p>No. Personal Microsoft Accounts should not receive this error. If you're trying to sign in with a personal account and receive this error, please reach out to <a href="mailto:isak@dombesteindata.net">isak@dombesteindata.net</a> and we'll help you troubleshoot.</p>
              <br />
              <p><b>What data is Focaline getting from my Microsoft account?</b></p>
              <p>The only data we collect about you from your Microsoft account is your email, as well as your first and last name. We do not collect any sensitive information stored on your account, and can not read your emails or other events without you granting further explicit permission to do so. All data is processed in accordance with local data regulations as explained in our Privacy Policy.</p>
              <br />
              <p><b>I'm an Azure Entra ID administrator, what do I need to do?</b></p>
              <p>In some cases, a user can request the app to be verified using a direct link in the error message. If you don't see any request for Focaline in your Entra Admin Center, please reach out to <a href="mailto:isak@dombesteindata.net">isak@dombesteindata.net</a> and we'll provide you with further information. Please label the email with "Focaline App Registration - (YOUR COMPANY) Entra Admin". Replace "(YOUR COMPANY)" with your company name.</p>
              <br />
              <p><b>Focaline has been granted admin approval in Entra Admin Center, but the error persists.</b></p>
              <p>Please try closing all browsers and retry. If the error still persists, try clearing all cache and cookies. If you're unsure how to do this, please search online for how to do so for your browser. If the error still persists, please contact <a href="mailto:isak@dombesteindata.net">isak@dombesteindata.net</a> for further investigation</p>
          </main>
          </div>  
        {/* Shadow effect */}
        <div className="shadow"></div>
      </section>
    );
  };
  