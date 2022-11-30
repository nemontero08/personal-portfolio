import { extendTheme } from "@chakra-ui/react";
import myColors from '../Styles/variables/_variables.scss';

const theme = extendTheme({
    colors:{
        brand:{
            whiteColor:'#f5f5f5',
            blackColor:'#454545',
            primaryColor:'#ba94d1',
            accentColor:'#7f669d'
        }
    },
    components:{
        Button:{
            variants:{
                outline:{
                    color: 'brand.blackColor',
                    letterSpacing:'0.074rem',
                    fontWeight:'500',
                    borderColor:'brand.blackColor',
                    borderRadius:'0.235rem',
                    backgroundColor:'brand.whiteColor',
                    _after:{
                        content:'""',
                        display:'block',
                        position:'absolute',
                        zIndex:'-1',
                        width:'96%',
                        height:'100%',
                        bottom:'-4px',
                        left:'calc(50% - 48%)',
                        borderRadius:'0.235rem',
                        border:'1px solid',
                        borderColor:'brand.blackColor',
                        backgroundColor:'brand.whiteColor',
                    },
                    _hover:{
                        backgroundColor:'brand.primaryColor',
                        _after:{
                            backgroundColor:'brand.accentColor'
                        }
                    },
                    _active:{
                        backgroundColor:'brand.accentColor',
                        _after:{
                            backgroundColor:'brand.primaryColor'
                        }
                    }
                }
            }
        }
    }
});

export default theme;