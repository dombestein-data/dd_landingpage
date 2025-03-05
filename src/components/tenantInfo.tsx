export const TenantInfo = () => {
    return (
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="col-span-full xl:col-span-2">
           
        </div>
        <div className="text-center lg:text-start space-y-6">
          <main>
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                About Tenants in Velox
              </span>{" "}
              </h1>
              <p>
                When registering for the cloud-hosted version of Velox, you'll need a Tenant ID to complete your registration. This is required to ensure that your account only gets access to your intended company only, and not one of the other companies that use the same cloud hosted verison. 
                <br />
                <i>NOTE: The requirement for a Tenant ID when registering for Velox on self hosted infrastructure can be removed upon request.</i>
              </p>
              <br />
              <hr />
              <br />
              <h1 className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text"><b>FAQ</b></h1>
              <br/>
              <p><b>I'm registering for an account with my company, what Tenant ID should I use?</b></p>
              <p>Your company's IT or HR department should have provided you with a Tenant ID when requesting you to create an account on Velox. If you have not received this, please contact your nearest leader, or your company's HR or IT department.</p>
              <br />
              <p><b>I want to create a new tenant for our company, where do I register?</b></p>
              <p>As of right now, new tenants can only be created by contacting us directly. We are working on allowing companies to create a new tenant without our assistance but will need some more time to get this implemented. We'll open up requests for tenants when we hit public beta later this year.</p>
              <br />
              <p><b>I've signed up for an account, but don't see my company in my list / have access to completely different company</b></p>
              <p>Although this should never happen, there's a slight chance something got messed up when your information was stored on our end. Please have your supervisor / HR-department / IT-department reach out to us for further investigagion.</p>
              <br />
              <p><b>My company has set up several tenants for us in Velox, How do I gain access to them all instead of just one?</b></p>
              <p>We're working on allowing users to request access to multiple tenants, but haven't been able to work out all the bugs for this. For now, have your manager or IT/HR-department reach out to us with your user ID and the tenant ID(s) you need access to, and we'll manually add your account.</p>
          </main>
          </div>  
        {/* Shadow effect */}
        <div className="shadow"></div>
      </section>
    );
  };
  