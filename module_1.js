{
    //debuging output
    card.mainActionSet = function(){return this.properties.cost;};
    console.log(card.mainActionSet());
    
    /*      BUILDER CLASS            */
    //  Abstract class that discribes
    //  common interface of building 
    //  parts of pruduct-object
    
    class BehaviorBuilder {
    
        constructor(){}
    
        // createCardProp(){}
        // createCardMainB(){}
        // createCardTeamB(){}
        // createCardUtilB(){}
        // assemblCard(){}
    
        //      VAST F*CING ARRAY
        //      prop_arr = [
                    // [                                                                                                      _
                    //     "Trade Bot" ,                                                           NAME                        \
                    //     "Technocult",                                                           TEAM                         |
                    //     1,                                                                      COST                         |
                    //     [0,2],                                                                  DAMAGE                       |
                    //     1,                                                                      INCOME                       |
                    //     0,                                                                      DOMINANCE                    |
                    //     {util:1},                                                               UTILIZATION_POINT            |
                    //     {                                                                       MAIN_BEHAVIORS               |
                    //         action_1 : function(){return this.properties.income},                                             >   X 46 times
                    //         action_2 : function(){ SOME REALISATION OF UTILISATION }                                         |
                    //     },                                                                                                   |
                    //     {                                                                       TEAM_BEHAVIOR                |
                    //         action : function(){return this.properties.damage[1]}                                            |
                    //     },                                                                                                   |
                    //     {}                                                                      UTIL_BEHAVIOR                |
                    // ]                                                                                                      _/
        //           .
        //           .
        //           .
        //      ]
    }
    
    
    
    /*      DIRECTOR CLASS           */
    
    /*      CONCRETE_BUILDER CLASS   */
    //  Builds and assembles part of product-object
    
    class PropertiesBuilder extends BehaviorBuilder {
    
        constructor(index_num, prop_arr) {
            super();
            this.name =      prop_arr[index_num][0];
            this.team =      prop_arr[index_num][1];
            this.cost =      prop_arr[index_num][2];
            this.damage =    prop_arr[index_num][3];
            this.income =    prop_arr[index_num][4];
            this.dominance = prop_arr[index_num][5];
            this.extra =     prop_arr[index_num][6];
        }
    
    }
    
    class MainBehaviorMaker extends BehaviorBuilder {
    
        constructor(index_num, prop_arr) {
    
            super();
            this.firstAction =  prop_arr[index_num][7].action_1;
            if (prop_arr[index_num][7].action_2)
            {
                this.secondAction = prop_arr[index_num][7].action_2;
            };
    
        }
    
    }
    
    class TeamBehaviorMaker extends BehaviorBuilder {
    
        constructor(index_num, prop_arr) {
    
            super();
            if (prop_arr[index_num][8].action_1)
            {
                this.action = prop_arr[index_num][8].action_1;
            }
    
        }
    
    }
    
    class UtilBehaviorMaker extends BehaviorBuilder {
    
        constructor(index_num, prop_arr) {
    
            super();
            if (prop_arr[index_num][9].action_1)
            {
                this.action = prop_arr[index_num][9].action_1;
            }
    
        }
    
    }
    
    
    /*      PRODUCT CLASS            */
    }
    
    
    
    // Second attempt of card object realisation
    
    let card = {
    
        properties : {
            name:      "",
            team:      "",
            cost:       0,
        },
    
        pointStorage : {
            damage: [0,0],
            income:     0,
            influence:  0
        },
    
        extraAction : {},
    
        mainActionSet : {},
    
        teamActionSet : {},
    
        utilizeActionSet : {}
    
    }
    
    class Properties {
    
        constructor(name, team, cost){
            const teamArr = ["empire", "federation", "slimes", "tecnocult", "none"];
            this.name = name;
            this.team = (team <= 4 || team >= 0) ? teamArr[team] : teamArr[4];
            this.cost = cost;      
        }
    
        get name(){return this.name}
        get cost(){return this.cost}
        get team(){return this.team}
    
    }
    
    class PointStorage {
    
        constructor(inc_p, inf_p, ...d_ps) {
            this.damage[0] = d_ps[0];
            this.damage[1] = d_ps[1];
            this.income = inc_p;
            this.influence = inf_p;
        }
    
        get damage(){return this.damage}
        get income(){return this.income}
        get influence(){return this.influence}
    }
    
    //abstract
    class action {
    
    }