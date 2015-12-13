import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let user = this.modelFor('user').login;

    return $.getJSON(`https://api.github.com/repos/${user}/${params.repo_name}`);
  }
});
