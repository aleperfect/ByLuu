process['env']['NODE_TLS_REJECT_UNAUTHORIZED']='0';import'./config.js';import'./api.js';import{createRequire}from'module';import _0x5747df,{join}from'path';import{fileURLToPath,pathToFileURL}from'url';import{platform}from'process';import*as _0x1f3d52 from'ws';import{readdirSync,statSync,unlinkSync,existsSync,readFileSync,rmSync,watch}from'fs';import _0x17ab84 from'yargs';import{spawn}from'child_process';import _0x39199a from'lodash';import _0x5e1eec from'chalk';import _0x176f28 from'syntax-error';import{tmpdir}from'os';import{format}from'util';import _0x4ff60e from'pino';import _0x9b082d from'pino';import{Boom}from'@hapi/boom';import{makeWASocket,protoType,serialize}from'./lib/simple.js';import{Low,JSONFile}from'lowdb';import{mongoDB,mongoDBV2}from'./lib/mongoDB.js';import _0x27d3fc from'./lib/store.js';const {proto}=(await import('@whiskeysockets/baileys'))['default'],{DisconnectReason,useMultiFileAuthState,MessageRetryMap,fetchLatestBaileysVersion,makeCacheableSignalKeyStore}=await import('@whiskeysockets/baileys'),{CONNECTING}=_0x1f3d52,{chain}=_0x39199a,PORT=process['env']['PORT']||process['env']['SERVER_PORT']||0xbb8;protoType(),serialize(),global['__filename']=function filename(_0x34d9d8=import.meta['url'],_0x18d62c=platform!=='win32'){return _0x18d62c?/file:\/\/\//['test'](_0x34d9d8)?fileURLToPath(_0x34d9d8):_0x34d9d8:pathToFileURL(_0x34d9d8)['toString']();},global['__dirname']=function dirname(_0x1276bc){return _0x5747df['dirname'](global['__filename'](_0x1276bc,!![]));},global['__require']=function require(_0x3def3d=import.meta['url']){return createRequire(_0x3def3d);},global['API']=(_0x121d63,_0x210385='/',_0x20654f={},_0x467d7b)=>(_0x121d63 in global['APIs']?global['APIs'][_0x121d63]:_0x121d63)+_0x210385+(_0x20654f||_0x467d7b?'?'+new URLSearchParams(Object['entries']({..._0x20654f,..._0x467d7b?{[_0x467d7b]:global['APIKeys'][_0x121d63 in global['APIs']?global['APIs'][_0x121d63]:_0x121d63]}:{}})):''),global['timestamp']={'start':new Date()},global['videoList']=[],global['videoListXXX']=[];const __dirname=global['__dirname'](import.meta['url']);global['opts']=new Object(_0x17ab84(process['argv']['slice'](0x2))['exitProcess'](![])['parse']()),global['prefix']=new RegExp('^['+(opts['prefix']||'*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\x5c-.@')['replace'](/[|\\{}()[\]^$+*?.\-\^]/g,'\x5c$&')+']'),global['db']=new Low(/https?:\/\//['test'](opts['db']||'')?new cloudDBAdapter(opts['db']):new JSONFile((opts['_'][0x0]?opts['_'][0x0]+'_':'')+'database.json')),global['DATABASE']=global['db'],global['loadDatabase']=async function loadDatabase(){if(global['db']['READ'])return new Promise(_0x2d5c18=>setInterval(async function(){!global['db']['READ']&&(clearInterval(this),_0x2d5c18(global['db']['data']==null?global['loadDatabase']():global['db']['data']));},0x1*0x3e8));if(global['db']['data']!==null)return;global['db']['READ']=!![],await global['db']['read']()['catch'](console['error']),global['db']['READ']=null,global['db']['data']={'users':{},'chats':{},'stats':{},'msgs':{},'sticker':{},'settings':{},...global['db']['data']||{}},global['db']['chain']=chain(global['db']['data']);},loadDatabase(),global['chatgpt']=new Low(new JSONFile(_0x5747df['join'](__dirname,'/db/chatgpt.json'))),global['loadChatgptDB']=async function loadChatgptDB(){if(global['chatgpt']['READ'])return new Promise(_0x2fe86c=>setInterval(async function(){!global['chatgpt']['READ']&&(clearInterval(this),_0x2fe86c(global['chatgpt']['data']===null?global['loadChatgptDB']():global['chatgpt']['data']));},0x1*0x3e8));if(global['chatgpt']['data']!==null)return;global['chatgpt']['READ']=!![],await global['chatgpt']['read']()['catch'](console['error']),global['chatgpt']['READ']=null,global['chatgpt']['data']={'users':{},...global['chatgpt']['data']||{}},global['chatgpt']['chain']=_0x39199a['chain'](global['chatgpt']['data']);},loadChatgptDB(),global['authFile']='Session-activa';const {state,saveState,saveCreds}=await useMultiFileAuthState(global['authFile']),msgRetryCounterMap=_0x25f54a=>{},{version}=await fetchLatestBaileysVersion(),connectionOptions={'printQRInTerminal':!![],'patchMessageBeforeSending':_0x23b50e=>{const _0x84d9cc=!!(_0x23b50e['buttonsMessage']||_0x23b50e['templateMessage']||_0x23b50e['listMessage']);return _0x84d9cc&&(_0x23b50e={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x23b50e}}}),_0x23b50e;},'getMessage':async _0x1d772c=>{if(_0x27d3fc){const _0x21c9a4=await _0x27d3fc['loadMessage'](_0x1d772c['remoteJid'],_0x1d772c['id']);return conn['chats'][_0x1d772c['remoteJid']]&&conn['chats'][_0x1d772c['remoteJid']]['messages'][_0x1d772c['id']]?conn['chats'][_0x1d772c['remoteJid']]['messages'][_0x1d772c['id']]['message']:undefined;}return proto['Message']['fromObject']({});},'msgRetryCounterMap':msgRetryCounterMap,'logger':_0x9b082d({'level':'silent'}),'auth':{'creds':state['creds'],'keys':makeCacheableSignalKeyStore(state['keys'],_0x9b082d({'level':'silent'}))},'browser':['HADES-BOT-MD','Safari','1.0.0'],'version':version,'defaultQueryTimeoutMs':undefined};global['conn']=makeWASocket(connectionOptions),conn['isInit']=![],conn['well']=![],conn['logger']['info']('Ƈᴀʀɢᴀɴᴅᴏ．．．\x0a');!opts['test']&&(global['db']&&setInterval(async()=>{if(global['db']['data'])await global['db']['write']();if(opts['autocleartmp']&&(global['support']||{})['find'])tmp=[os['tmpdir'](),'tmp','jadibts'],tmp['forEach'](_0x5bb189=>cp['spawn']('find',[_0x5bb189,'-amin','3','-type','f','-delete']));},0x1e*0x3e8));if(opts['server'])(await import('./server.js'))['default'](global['conn'],PORT);function clearTmp(){const _0xe5a1d2=[tmpdir(),join(__dirname,'./tmp')],_0x56141d=[];return _0xe5a1d2['forEach'](_0x2eb10f=>readdirSync(_0x2eb10f)['forEach'](_0x1d0450=>_0x56141d['push'](join(_0x2eb10f,_0x1d0450)))),_0x56141d['map'](_0x5de89c=>{const _0x2398c7=statSync(_0x5de89c);if(_0x2398c7['isFile']()&&Date['now']()-_0x2398c7['mtimeMs']>=0x3e8*0x3c*0x3)return unlinkSync(_0x5de89c);return![];});}function purgeSession(){let _0x4dbfb1=[],_0x5d6c13=readdirSync('./Session-activa'),_0x172620=_0x5d6c13['filter'](_0x57072d=>{return _0x57072d['startsWith']('pre-key-');});_0x4dbfb1=[..._0x4dbfb1,..._0x172620],_0x172620['forEach'](_0xc82727=>{unlinkSync('./Session-activa/'+_0xc82727);});}function purgeSessionSB(){try{let _0x492d75=readdirSync('./jadibts/'),_0x30326f=[];_0x492d75['forEach'](_0x111f8d=>{if(statSync('./jadibts/'+_0x111f8d)['isDirectory']()){let _0x19198c=readdirSync('./jadibts/'+_0x111f8d)['filter'](_0x218d52=>{return _0x218d52['startsWith']('pre-key-');});_0x30326f=[..._0x30326f,..._0x19198c],_0x19198c['forEach'](_0x4a6f26=>{unlinkSync('./jadibts/'+_0x111f8d+'/'+_0x4a6f26);});}});if(_0x30326f['length']===0x0)return;}catch(_0x4c40ac){console['log'](_0x5e1eec['bold']['red']('=>\x20Algo\x20salio\x20mal\x20durante\x20la\x20eliminación,\x20archivos\x20no\x20eliminados'));}}function purgeOldFiles(){const _0x5c4fe1=['./Session-activa/','./jadibts/'],_0x19adba=Date['now']()-0x3c*0x3c*0x3e8;_0x5c4fe1['forEach'](_0x5a3601=>{readdirSync(_0x5a3601,(_0x3c4357,_0x57c013)=>{if(_0x3c4357)throw _0x3c4357;_0x57c013['forEach'](_0x41f902=>{const _0x287da1=_0x5747df['join'](_0x5a3601,_0x41f902);stat(_0x287da1,(_0x4a1a83,_0x4fc5d3)=>{if(_0x4a1a83)throw _0x4a1a83;_0x4fc5d3['isFile']()&&_0x4fc5d3['mtimeMs']<_0x19adba&&_0x41f902!=='creds.json'?unlinkSync(_0x287da1,_0x4ba673=>{if(_0x4ba673)throw _0x4ba673;console['log'](_0x5e1eec['bold']['green']('Archivo\x20'+_0x41f902+'\x20borrado\x20con\x20éxito'));}):console['log'](_0x5e1eec['bold']['red']('Archivo\x20'+_0x41f902+'\x20no\x20borrado'+_0x4a1a83));});});});});}async function connectionUpdate(_0x9289d8){const {connection:_0x209f40,lastDisconnect:_0x31b57,isNewLogin:_0x4849be}=_0x9289d8;global['stopped']=_0x209f40;if(_0x4849be)conn['isInit']=!![];const _0x5c907e=_0x31b57?.['error']?.['output']?.['statusCode']||_0x31b57?.['error']?.['output']?.['payload']?.['statusCode'];_0x5c907e&&_0x5c907e!==DisconnectReason['loggedOut']&&conn?.['ws']['socket']==null&&(await global['reloadHandler'](!![])['catch'](console['error']),global['timestamp']['connect']=new Date());if(global['db']['data']==null)loadDatabase();_0x9289d8['qr']!=0x0&&_0x9289d8['qr']!=undefined&&console['log'](_0x5e1eec['yellow']('💥\x20Scan\x20this\x20QR\x20code,\x20the\x20QR\x20code\x20expires\x20in\x2060\x20seconds.'));_0x209f40=='open'&&console['log'](_0x5e1eec['yellow']('▣──────────────────────────────···\x0a│\x0a│❧\x20𝙲𝙾𝙽𝙴𝙲𝚃𝙰𝙳𝙾\x20𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴\x20𝙰𝙻\x20𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿\x20✅\x0a│\x0a▣──────────────────────────────···'));let _0x428815=new Boom(_0x31b57?.['error'])?.['output']?.['statusCode'];if(_0x209f40==='close'){if(_0x428815===DisconnectReason['badSession'])conn['logger']['error']('[\x20⚠\x20]\x20Incorrect\x20session,\x20please\x20delete\x20the\x20folder\x20'+global['authFile']+'\x20and\x20scan\x20again.');else{if(_0x428815===DisconnectReason['connectionClosed'])conn['logger']['warn']('[\x20⚠\x20]\x20Connection\x20closed,\x20reconnecting...'),await global['reloadHandler'](!![])['catch'](console['error']);else{if(_0x428815===DisconnectReason['connectionLost'])conn['logger']['warn']('[\x20⚠\x20]\x20Lost\x20connection\x20to\x20the\x20server,\x20reconnecting...'),await global['reloadHandler'](!![])['catch'](console['error']);else{if(_0x428815===DisconnectReason['connectionReplaced'])conn['logger']['error']('[\x20⚠\x20]\x20Connection\x20replaced,\x20another\x20new\x20session\x20has\x20been\x20opened.\x20Please\x20log\x20out\x20of\x20the\x20current\x20session\x20first.');else{if(_0x428815===DisconnectReason['loggedOut'])conn['logger']['error']('[\x20⚠\x20]\x20Connection\x20closed,\x20please\x20delete\x20the\x20folder\x20'+global['authFile']+'\x20and\x20scan\x20again.');else{if(_0x428815===DisconnectReason['restartRequired'])conn['logger']['info']('[\x20⚠\x20]\x20Reboot\x20required,\x20restart\x20the\x20server\x20if\x20you\x20have\x20any\x20problems.'),await global['reloadHandler'](!![])['catch'](console['error']);else _0x428815===DisconnectReason['timedOut']?(conn['logger']['warn']('[\x20⚠\x20]\x20Connection\x20timed\x20out,\x20reconnecting...'),await global['reloadHandler'](!![])['catch'](console['error'])):(conn['logger']['warn']('[\x20⚠\x20]\x20Unknown\x20disconnection\x20reason.\x20'+(_0x428815||'')+':\x20'+(_0x209f40||'')),await global['reloadHandler'](!![])['catch'](console['error']));}}}}}}}process['on']('uncaughtException',console['error']);let isInit=!![],handler=await import('./handler.js');global['reloadHandler']=async function(_0x21403d){try{const _0x4477b0=await import('./handler.js?update='+Date['now']())['catch'](console['error']);if(Object['keys'](_0x4477b0||{})['length'])handler=_0x4477b0;}catch(_0x240498){console['error'](_0x240498);}if(_0x21403d){const _0x3d48c6=global['conn']['chats'];try{global['conn']['ws']['close']();}catch{}conn['ev']['removeAllListeners'](),global['conn']=makeWASocket(connectionOptions,{'chats':_0x3d48c6}),isInit=!![];}!isInit&&(conn['ev']['off']('messages.upsert',conn['handler']),conn['ev']['off']('group-participants.update',conn['participantsUpdate']),conn['ev']['off']('groups.update',conn['groupsUpdate']),conn['ev']['off']('message.delete',conn['onDelete']),conn['ev']['off']('call',conn['onCall']),conn['ev']['off']('connection.update',conn['connectionUpdate']),conn['ev']['off']('creds.update',conn['credsUpdate']));conn['welcome']='乂✰@subject\x0a乂✰@user\x0a\x20Welcome\x20to\x20the\x20group\x20please\x20read\x20the\x20description\x20to\x20avoid\x20having\x20problems\x20with\x20the\x20group\x20creator\x0a\x0a@desc\x0a\x0a乂✰Enjoy\x20your\x20stay',conn['bye']='乂✰@user\x0a乂✰Left\x20the\x20group\x20goodbye\x20come\x20back\x20soon',conn['spromote']='乂✰@user\x0a乂✰Has\x20joined\x20the\x20management\x20team\x20',conn['sdemote']='乂✰@user\x0a乂\x20Admin\x20team\x20abandoned!!',conn['sDesc']='乂✰Group\x20description\x20has\x20been\x20changed\x0a@desc',conn['sSubject']='乂✰The\x20group\x20name\x20has\x20been\x20changed\x0a@subject',conn['sIcon']='乂✰The\x20group\x20image\x20has\x20been\x20modified',conn['sRevoke']='乂✰Group\x20link\x20updated\x0a@revoke',conn['handler']=handler['handler']['bind'](global['conn']),conn['participantsUpdate']=handler['participantsUpdate']['bind'](global['conn']),conn['groupsUpdate']=handler['groupsUpdate']['bind'](global['conn']),conn['onDelete']=handler['deleteUpdate']['bind'](global['conn']),conn['onCall']=handler['callUpdate']['bind'](global['conn']),conn['connectionUpdate']=connectionUpdate['bind'](global['conn']),conn['credsUpdate']=saveCreds['bind'](global['conn'],!![]);const _0x1e87e8=new Date(),_0x3f6697=new Date(conn['ev']);if(_0x1e87e8>=_0x3f6697){const _0x2bbfd8=Object['entries'](conn['chats'])['filter'](([_0x557730,_0x3a071e])=>!_0x557730['endsWith']('@g.us')&&_0x3a071e['isChats'])['map'](_0x119401=>_0x119401[0x0]);}else{const _0x38ad6f=Object['entries'](conn['chats'])['filter'](([_0x3a5c06,_0x2cb7b8])=>!_0x3a5c06['endsWith']('@g.us')&&_0x2cb7b8['isChats'])['map'](_0x309ce8=>_0x309ce8[0x0]);}return conn['ev']['on']('messages.upsert',conn['handler']),conn['ev']['on']('group-participants.update',conn['participantsUpdate']),conn['ev']['on']('groups.update',conn['groupsUpdate']),conn['ev']['on']('message.delete',conn['onDelete']),conn['ev']['on']('call',conn['onCall']),conn['ev']['on']('connection.update',conn['connectionUpdate']),conn['ev']['on']('creds.update',conn['credsUpdate']),isInit=![],!![];};const pluginFolder=global['__dirname'](join(__dirname,'./plugins/index')),pluginFilter=_0x300765=>/\.js$/['test'](_0x300765);global['plugins']={};async function filesInit(){for(const _0x420276 of readdirSync(pluginFolder)['filter'](pluginFilter)){try{const _0x2d86e7=global['__filename'](join(pluginFolder,_0x420276)),_0x42221f=await import(_0x2d86e7);global['plugins'][_0x420276]=_0x42221f['default']||_0x42221f;}catch(_0x1cfa22){conn['logger']['error'](_0x1cfa22),delete global['plugins'][_0x420276];}}}filesInit()['then'](_0x550033=>Object['keys'](global['plugins']))['catch'](console['error']),global['reload']=async(_0x5d055e,_0x224fa6)=>{if(pluginFilter(_0x224fa6)){const _0x471052=global['__filename'](join(pluginFolder,_0x224fa6),!![]);if(_0x224fa6 in global['plugins']){if(existsSync(_0x471052))conn['logger']['info']('\x20updated\x20plugin\x20-\x20\x27'+_0x224fa6+'\x27');else return conn['logger']['warn']('deleted\x20plugin\x20-\x20\x27'+_0x224fa6+'\x27'),delete global['plugins'][_0x224fa6];}else conn['logger']['info']('new\x20plugin\x20-\x20\x27'+_0x224fa6+'\x27');const _0x2e38d0=_0x176f28(readFileSync(_0x471052),_0x224fa6,{'sourceType':'module','allowAwaitOutsideFunction':!![]});if(_0x2e38d0)conn['logger']['error']('syntax\x20error\x20while\x20loading\x20\x27'+_0x224fa6+'\x27\x0a'+format(_0x2e38d0));else try{const _0x166b8c=await import(global['__filename'](_0x471052)+'?update='+Date['now']());global['plugins'][_0x224fa6]=_0x166b8c['default']||_0x166b8c;}catch(_0xfb9500){conn['logger']['error']('error\x20require\x20plugin\x20\x27'+_0x224fa6+'\x0a'+format(_0xfb9500)+'\x27');}finally{global['plugins']=Object['fromEntries'](Object['entries'](global['plugins'])['sort'](([_0x2b941c],[_0x437961])=>_0x2b941c['localeCompare'](_0x437961)));}}},Object['freeze'](global['reload']),watch(pluginFolder,global['reload']),await global['reloadHandler']();async function _quickTest(){const _0x37900e=await Promise['all']([spawn('ffmpeg'),spawn('ffprobe'),spawn('ffmpeg',['-hide_banner','-loglevel','error','-filter_complex','color','-frames:v','1','-f','webp','-']),spawn('convert'),spawn('magick'),spawn('gm'),spawn('find',['--version'])]['map'](_0x5bfa1b=>{return Promise['race']([new Promise(_0x1feb29=>{_0x5bfa1b['on']('close',_0x452232=>{_0x1feb29(_0x452232!==0x7f);});}),new Promise(_0x13b684=>{_0x5bfa1b['on']('error',_0x306a45=>_0x13b684(![]));})]);})),[_0x39a2df,_0x5a2202,_0x3b47e0,_0x29c059,_0xf03962,_0x3b88ee,_0x50d5c5]=_0x37900e,_0x328b2b=global['support']={'ffmpeg':_0x39a2df,'ffprobe':_0x5a2202,'ffmpegWebp':_0x3b47e0,'convert':_0x29c059,'magick':_0xf03962,'gm':_0x3b88ee,'find':_0x50d5c5};Object['freeze'](global['support']);}setInterval(async()=>{if(stopped==='close'||!conn||!conn['user'])return;const _0x17caf1=await clearTmp();},0x2bf20),setInterval(async()=>{if(stopped==='close'||!conn||!conn['user'])return;await purgeSession();},0x3e8*0x3c*0x3c),setInterval(async()=>{if(stopped==='close'||!conn||!conn['user'])return;await purgeSessionSB();},0x3e8*0x3c*0x3c),setInterval(async()=>{if(stopped==='close'||!conn||!conn['user'])return;await purgeOldFiles();},0x3e8*0x3c*0x3c),setInterval(async()=>{if(stopped==='close'||!conn||!conn['user'])return;const _0x3c098b=process['uptime']()*0x3e8,_0x9acd1b=clockString(_0x3c098b),_0x3e52dc='🤖\x20This\x20user\x20makes\x20use\x20of\x20HADES-BOT-MD\x20active\x20time\x20'+_0x9acd1b+'\x20';await conn['updateProfileStatus'](_0x3e52dc)['catch'](_0x55b02a=>_0x55b02a);},0xea60);function clockString(_0x47986b){const _0x28f1b4=isNaN(_0x47986b)?'--':Math['floor'](_0x47986b/0x5265c00),_0x74bba=isNaN(_0x47986b)?'--':Math['floor'](_0x47986b/0x36ee80)%0x18,_0x31abde=isNaN(_0x47986b)?'--':Math['floor'](_0x47986b/0xea60)%0x3c,_0x3d1398=isNaN(_0x47986b)?'--':Math['floor'](_0x47986b/0x3e8)%0x3c;return[_0x28f1b4,'\x20Día(s)\x20️',_0x74bba,'\x20Hora(s)\x20',_0x31abde,'\x20Minuto(s)\x20',_0x3d1398,'\x20Segundo(s)\x20']['map'](_0x5c9375=>_0x5c9375['toString']()['padStart'](0x2,0x0))['join']('');}_quickTest()['catch'](console['error']);