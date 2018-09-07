import { _ } from 'underscore';

export class Utils {

 static _cartesianProductOf(args:Obejct) {
    if (arguments.length>1) args=_.toArray(arguments);

    // strings to arrays of letters
    args=_.map(args, opt=>typeof opt==='string'?_.toArray(opt):opt)

    return _.reduce(args, function(a, b) {
        return _.flatten(_.map(a, function(x) {
            return _.map(b, function(y) {
                return x.concat([y]);
            });
        }), true);
    }, [ [] ]);
};

static  _cartesianProductObj(optObj:Object){
    var keys = _.keys(optObj);
    var opts = _.values(optObj);
    var combs = this._cartesianProductOf(opts);
    return _.map(combs,function(comb){
        return _.object(keys,comb);
    });
}

}
