# Ads — sloppyforgeries.wiki

The Native Banner slot after Quick Answer is wired and **turned off**.

`sites/sloppyforgeries/ads.config.ts` sets `enabled` to false. `afterQuickAnswer.id` is empty. `afterQuickAnswer.scriptSrc` is empty. `adsConfig.scriptSrc` is empty. `invokeBase` stays empty. No key from another game is stored here.

`analytics.gaId` in `sites/sloppyforgeries/site.config.ts` is an empty string. The base layout does not load GA4.

When a zone is created for this domain, put that id and script URL here. Do not reuse a key from another site.

Adult and sensitive categories stay off. The 404 page does not render a slot.
