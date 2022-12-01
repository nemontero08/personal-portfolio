import { extendTheme } from "@chakra-ui/react";

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
        Box:{
            variants:{
                'drawerHeader':{
                    bg:'brand.primaryColor'
                }
            }
        }
        ,
        CloseButton:{
            variants:{
                'drawerBtn':{
                    color:'brand.accentColor',
                    fontSize:'md',
                    mt:'3',
                    _hover:{
                        bg: 'transparent'
                    },
                    _active:{
                        color:'brand.primaryColor'
                    }
                }
            }
        },
        Button:{
            variants:{
                'drawerBtn':{
                    color:'brand.accentColor',
                    _active:{
                        color:'brand.primaryColor',
                    }
                },
                'navItem':{
                    color: 'brand.blackColor',
                    letterSpacing:'0.029rem',
                    fontWeight:'normal',
                    fontSize:'1rem',
                    paddingLeft:'0',
                    position: 'relative',
                    zIndex:'1',
                    _hover:{
                        _before:{
                            content:'""',
                            display:'block',
                            position:'absolute',
                            width:'80%',
                            height:'0.8rem',
                            top: '1.3rem',
                            left:'0',
                            zIndex:'-1',
                            backgroundColor:'brand.primaryColor',
                        }
                    }
                },
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