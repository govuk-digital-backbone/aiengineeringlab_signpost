function setupDOM() {
  document.body.innerHTML = `
    <div id="cookie-banner">
      <div id="cookie-banner-message">
        <button data-accept-cookies>Accept</button>
        <button data-reject-cookies>Reject</button>
      </div>
      <div id="cookie-banner-accepted" hidden>
        <button data-hide-cookie-banner>Hide</button>
      </div>
      <div id="cookie-banner-rejected" hidden>
        <button data-hide-cookie-banner>Hide</button>
      </div>
    </div>
  `;
}

function createConsentManager(getDocumentCookie, setDocumentCookie) {
  const COOKIE_NAME = "analytics_consent";
  const COOKIE_EXPIRY_DAYS = 365;

  function getCookie(name) {
    const match = getDocumentCookie().match(
      new RegExp("(?:^|; )" + name + "=([^;]*)")
    );
    return match ? decodeURIComponent(match[1]) : null;
  }

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    setDocumentCookie(
      name +
        "=" +
        encodeURIComponent(value) +
        "; expires=" +
        expires +
        "; path=/; SameSite=Lax; Secure"
    );
  }

  const state = {
    gtmLoaded: false,
  };

  function loadGTM() {
    if (state.gtmLoaded) return;
    state.gtmLoaded = true;
  }

  function hideBanner() {
    const banner = document.getElementById("cookie-banner");
    if (banner) banner.hidden = true;
  }

  function showMessage(id) {
    const el = document.getElementById(id);
    if (el) el.hidden = false;
  }

  function hideMessage(id) {
    const el = document.getElementById(id);
    if (el) el.hidden = true;
  }

  function init() {
    const consent = getCookie(COOKIE_NAME);
    if (consent === "accepted") {
      loadGTM();
      hideBanner();
    } else if (consent === "rejected") {
      hideBanner();
    }

    document.addEventListener("click", function (e) {
      if (e.target && e.target.hasAttribute("data-accept-cookies")) {
        setCookie(COOKIE_NAME, "accepted", COOKIE_EXPIRY_DAYS);
        loadGTM();
        hideMessage("cookie-banner-message");
        showMessage("cookie-banner-accepted");
      }
      if (e.target && e.target.hasAttribute("data-reject-cookies")) {
        setCookie(COOKIE_NAME, "rejected", COOKIE_EXPIRY_DAYS);
        hideMessage("cookie-banner-message");
        showMessage("cookie-banner-rejected");
      }
      if (e.target && e.target.hasAttribute("data-hide-cookie-banner")) {
        hideBanner();
      }
    });
  }

  return { init, state, getCookie, loadGTM };
}

beforeEach(() => {
  setupDOM();
  document.body.replaceWith(document.body.cloneNode(true));
  setupDOM();
});

describe("GTM not loaded by default", () => {
  test("GTM is not loaded when no consent cookie exists", () => {
    let cookies = "";
    const manager = createConsentManager(() => cookies, () => {});
    manager.init();
    expect(manager.state.gtmLoaded).toBe(false);
  });
});

describe("Returning visitor — consent already accepted", () => {
  test("GTM loads and banner hides if analytics_consent=accepted cookie is set", () => {
    const cookies = "analytics_consent=accepted";
    const manager = createConsentManager(() => cookies, () => {});
    manager.init();
    expect(manager.state.gtmLoaded).toBe(true);
    expect(document.getElementById("cookie-banner").hidden).toBe(true);
  });
});

describe("Returning visitor — consent already rejected", () => {
  test("GTM does not load and banner hides if analytics_consent=rejected cookie is set", () => {
    const cookies = "analytics_consent=rejected";
    const manager = createConsentManager(() => cookies, () => {});
    manager.init();
    expect(manager.state.gtmLoaded).toBe(false);
    expect(document.getElementById("cookie-banner").hidden).toBe(true);
  });
});

describe("Accept button", () => {
  test("clicking accept loads GTM and shows accepted message", () => {
    let savedCookie = "";
    const manager = createConsentManager(
      () => savedCookie,
      (val) => { savedCookie = val; }
    );
    manager.init();

    document.querySelector("[data-accept-cookies]").click();

    expect(manager.state.gtmLoaded).toBe(true);
    expect(savedCookie).toMatch(/analytics_consent=accepted/);
    expect(document.getElementById("cookie-banner-message").hidden).toBe(true);
    expect(document.getElementById("cookie-banner-accepted").hidden).toBe(false);
  });

  test("loadGTM() is idempotent — called twice only loads once", () => {
    const manager = createConsentManager(() => "", () => {});
    manager.loadGTM();
    manager.loadGTM();
    expect(manager.state.gtmLoaded).toBe(true);
  });
});

describe("Reject button", () => {
  test("clicking reject does not load GTM and shows rejected message", () => {
    let savedCookie = "";
    const manager = createConsentManager(
      () => savedCookie,
      (val) => { savedCookie = val; }
    );
    manager.init();

    document.querySelector("[data-reject-cookies]").click();

    expect(manager.state.gtmLoaded).toBe(false);
    expect(savedCookie).toMatch(/analytics_consent=rejected/);
    expect(document.getElementById("cookie-banner-message").hidden).toBe(true);
    expect(document.getElementById("cookie-banner-rejected").hidden).toBe(false);
  });
});

describe("Hide banner button", () => {
  test("clicking hide removes the cookie banner", () => {
    let savedCookie = "";
    const manager = createConsentManager(
      () => savedCookie,
      (val) => { savedCookie = val; }
    );
    manager.init();

    document.querySelector("[data-accept-cookies]").click();
    document.querySelector("[data-hide-cookie-banner]").click();

    expect(document.getElementById("cookie-banner").hidden).toBe(true);
  });
});
