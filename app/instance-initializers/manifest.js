export default {
  name: 'manifest',

  initialize: function(instance) {
    const store    = instance.container.lookup('store:main');
    const manifest =  window.FlowfeedsManifest;

    if (typeof manifest === 'undefined') {
      return;
    }

    if (manifest.Payload) {
      store.pushPayload(manifest.Payload);
    }

    if (manifest.CurrentUser) {
      var user = store.getById('user', manifest.CurrentUser);
      instance.container.lookup('controller:sessions').begin(user);
    }
  }
};
