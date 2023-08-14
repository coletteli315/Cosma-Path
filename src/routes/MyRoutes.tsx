import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';

import Daily from '../pages/daily/Daily';
import DailyAries from '../pages/daily/DailyAries';
import DailyTaurus from '../pages/daily/DailyTaurus';
import DailyGemini from '../pages/daily/DailyGemini';
import DailyCancer from '../pages/daily/DailyCancer';
import DailyLeo from '../pages/daily/DailyLeo';
import DailyVirgo from '../pages/daily/DailyVirgo';
import DailyLibra from '../pages/daily/DailyLibra';
import DailyScorpio from '../pages/daily/DailyScorpio';
import DailySagittarius from '../pages/daily/DailySagittarius';
import DailyCapricorn from '../pages/daily/DailyCapricorn';
import DailyAquarius from '../pages/daily/DailyAquarius';
import DailyPisces from '../pages/daily/DailyPisces';

import Love from '../pages/love/Love';
import LoveAries from '../pages/love/aries/LoveAries';
import LoveTaurus from '../pages/love/taurus/LoveTaurus';
import LoveGemini from '../pages/love/gemini/LoveGemini';
import LoveCancer from '../pages/love/cancer/LoveCancer';
import LoveLeo from '../pages/love/leo/LoveLeo';
import LoveVirgo from '../pages/love/virgo/LoveVirgo';
import LoveLibra from '../pages/love/libra/LoveLibra';
import LoveScorpio from '../pages/love/scorpio/LoveScorpio';
import LoveSagittarius from '../pages/love/sagittarius/LoveSagittarius';
import LoveCapricorn from '../pages/love/capricorn/LoveCapricorn';
import LoveAquarius from '../pages/love/aquarius/LoveAquarius';
import LovePisces from '../pages/love/pisces/LovePisces';
import LoveAriesAries from '../pages/love/aries/LoveAriesAries';
import LoveAriesTaurus from '../pages/love/aries/LoveAriesTaurus';
import LoveAriesGemini from '../pages/love/aries/LoveAriesGemini';
import LoveAriesCancer from '../pages/love/aries/LoveAriesCancer';
import LoveAriesLeo from '../pages/love/aries/LoveAriesLeo';
import LoveAriesVirgo from '../pages/love/aries/LoveAriesVirgo';
import LoveAriesLibra from '../pages/love/aries/LoveAriesLibra';
import LoveAriesScorpio from '../pages/love/aries/LoveAriesScorpio';
import LoveAriesSagittarius from '../pages/love/aries/LoveAriesSagittarius';
import LoveAriesCapricorn from '../pages/love/aries/LoveAriesCapricorn';
import LoveAriesAquarius from '../pages/love/aries/LoveAriesAquarius';
import LoveAriesPisces from '../pages/love/aries/LoveAriesPisces';
import LoveTaurusAries from '../pages/love/taurus/LoveTaurusAries';
import LoveTaurusTaurus from '../pages/love/taurus/LoveTaurusTaurus';
import LoveTaurusGemini from '../pages/love/taurus/LoveTaurusGemini';
import LoveTaurusCancer from '../pages/love/taurus/LoveTaurusCancer';
import LoveTaurusLeo from '../pages/love/taurus/LoveTaurusLeo';
import LoveTaurusVirgo from '../pages/love/taurus/LoveTaurusVirgo';
import LoveTaurusLibra from '../pages/love/taurus/LoveTaurusLibra';
import LoveTaurusScorpio from '../pages/love/taurus/LoveTaurusScorpio';
import LoveTaurusSagittarius from '../pages/love/taurus/LoveTaurusSagittarius';
import LoveTaurusCapricorn from '../pages/love/taurus/LoveTaurusCapricorn';
import LoveTaurusAquarius from '../pages/love/taurus/LoveTaurusAquarius';
import LoveTaurusPisces from '../pages/love/taurus/LoveTaurusPisces';
import LoveGeminiAries from '../pages/love/gemini/LoveGeminiAries';
import LoveGeminiTaurus from '../pages/love/gemini/LoveGeminiTaurus';
import LoveGeminiGemini from '../pages/love/gemini/LoveGeminiGemini';
import LoveGeminiCancer from '../pages/love/gemini/LoveGeminiCancer';
import LoveGeminiLeo from '../pages/love/gemini/LoveGeminiLeo';
import LoveGeminiVirgo from '../pages/love/gemini/LoveGeminiVirgo';
import LoveGeminiLibra from '../pages/love/gemini/LoveGeminiLibra';
import LoveGeminiScorpio from '../pages/love/gemini/LoveGeminiScorpio';
import LoveGeminiSagittarius from '../pages/love/gemini/LoveGeminiSagittarius';
import LoveGeminiCapricorn from '../pages/love/gemini/LoveGeminiCapricorn';
import LoveGeminiAquarius from '../pages/love/gemini/LoveGeminiAquarius';
import LoveGeminiPisces from '../pages/love/gemini/LoveGeminiPisces';
import LoveCancerAries from '../pages/love/cancer/LoveCancerAries';
import LoveCancerTaurus from '../pages/love/cancer/LoveCancerTaurus';
import LoveCancerGemini from '../pages/love/cancer/LoveCancerGemini';
import LoveCancerCancer from '../pages/love/cancer/LoveCancerCancer';
import LoveCancerLeo from '../pages/love/cancer/LoveCancerLeo';
import LoveCancerVirgo from '../pages/love/cancer/LoveCancerVirgo';
import LoveCancerLibra from '../pages/love/cancer/LoveCancerLibra';
import LoveCancerScorpio from '../pages/love/cancer/LoveCancerScorpio';
import LoveCancerSagittarius from '../pages/love/cancer/LoveCancerSagittarius';
import LoveCancerCapricorn from '../pages/love/cancer/LoveCancerCapricorn';
import LoveCancerAquarius from '../pages/love/cancer/LoveCancerAquarius';
import LoveCancerPisces from '../pages/love/cancer/LoveCancerPisces';
import LoveLeoAries from '../pages/love/leo/LoveLeoAries';
import LoveLeoTaurus from '../pages/love/leo/LoveLeoTaurus';
import LoveLeoGemini from '../pages/love/leo/LoveLeoGemini';
import LoveLeoCancer from '../pages/love/leo/LoveLeoCancer';
import LoveLeoLeo from '../pages/love/leo/LoveLeoLeo';
import LoveLeoVirgo from '../pages/love/leo/LoveLeoVirgo';
import LoveLeoLibra from '../pages/love/leo/LoveLeoLibra';
import LoveLeoScorpio from '../pages/love/leo/LoveLeoScorpio';
import LoveLeoSagittarius from '../pages/love/leo/LoveLeoSagittarius';
import LoveLeoCapricorn from '../pages/love/leo/LoveLeoCapricorn';
import LoveLeoAquarius from '../pages/love/leo/LoveLeoAquarius';
import LoveLeoPisces from '../pages/love/leo/LoveLeoPisces';
import LoveVirgoAries from '../pages/love/virgo/LoveVirgoAries';
import LoveVirgoTaurus from '../pages/love/virgo/LoveVirgoTaurus';
import LoveVirgoGemini from '../pages/love/virgo/LoveVirgoGemini';
import LoveVirgoCancer from '../pages/love/virgo/LoveVirgoCancer';
import LoveVirgoLeo from '../pages/love/virgo/LoveVirgoLeo';
import LoveVirgoVirgo from '../pages/love/virgo/LoveVirgoVirgo';
import LoveVirgoLibra from '../pages/love/virgo/LoveVirgoLibra';
import LoveVirgoScorpio from '../pages/love/virgo/LoveVirgoScorpio';
import LoveVirgoSagittarius from '../pages/love/virgo/LoveVirgoSagittarius';
import LoveVirgoCapricorn from '../pages/love/virgo/LoveVirgoCapricorn';
import LoveVirgoAquarius from '../pages/love/virgo/LoveVirgoAquarius';
import LoveVirgoPisces from '../pages/love/virgo/LoveVirgoPisces';
import LoveLibraAries from '../pages/love/libra/LoveLibraAries';
import LoveLibraTaurus from '../pages/love/libra/LoveLibraTaurus';
import LoveLibraGemini from '../pages/love/libra/LoveLibraGemini';
import LoveLibraCancer from '../pages/love/libra/LoveLibraCancer';
import LoveLibraLeo from '../pages/love/libra/LoveLibraLeo';
import LoveLibraVirgo from '../pages/love/libra/LoveLibraVirgo';
import LoveLibraLibra from '../pages/love/libra/LoveLibraLibra';
import LoveLibraScorpio from '../pages/love/libra/LoveLibraScorpio';
import LoveLibraSagittarius from '../pages/love/libra/LoveLibraSagittarius';
import LoveLibraCapricorn from '../pages/love/libra/LoveLibraCapricorn';
import LoveLibraAquarius from '../pages/love/libra/LoveLibraAquarius';
import LoveLibraPisces from '../pages/love/libra/LoveLibraPisces';
import LoveScorpioAries from '../pages/love/scorpio/LoveScorpioAries';
import LoveScorpioTaurus from '../pages/love/scorpio/LoveScorpioTaurus';
import LoveScorpioGemini from '../pages/love/scorpio/LoveScorpioGemini';
import LoveScorpioCancer from '../pages/love/scorpio/LoveScorpioCancer';
import LoveScorpioLeo from '../pages/love/scorpio/LoveScorpioLeo';
import LoveScorpioVirgo from '../pages/love/scorpio/LoveScorpioVirgo';
import LoveScorpioLibra from '../pages/love/scorpio/LoveScorpioLibra';
import LoveScorpioScorpio from '../pages/love/scorpio/LoveScorpioScorpio';
import LoveScorpioSagittarius from '../pages/love/scorpio/LoveScorpioSagittarius';
import LoveScorpioCapricorn from '../pages/love/scorpio/LoveScorpioCapricorn';
import LoveScorpioAquarius from '../pages/love/scorpio/LoveScorpioAquarius';
import LoveScorpioPisces from '../pages/love/scorpio/LoveScorpioPisces';
import LoveSagittariusAries from '../pages/love/sagittarius/LoveSagittariusAries';
import LoveSagittariusTaurus from '../pages/love/sagittarius/LoveSagittariusTaurus';
import LoveSagittariusGemini from '../pages/love/sagittarius/LoveSagittariusGemini';
import LoveSagittariusCancer from '../pages/love/sagittarius/LoveSagittariusCancer';
import LoveSagittariusLeo from '../pages/love/sagittarius/LoveSagittariusLeo';
import LoveSagittariusVirgo from '../pages/love/sagittarius/LoveSagittariusVirgo';
import LoveSagittariusLibra from '../pages/love/sagittarius/LoveSagittariusLibra';
import LoveSagittariusScorpio from '../pages/love/sagittarius/LoveSagittariusScorpio';
import LoveSagittariusSagittarius from '../pages/love/sagittarius/LoveSagittariusSagittarius';
import LoveSagittariusCapricorn from '../pages/love/sagittarius/LoveSagittariusCapricorn';
import LoveSagittariusAquarius from '../pages/love/sagittarius/LoveSagittariusAquarius';
import LoveSagittariusPisces from '../pages/love/sagittarius/LoveSagittariusPisces';
import LoveCapricornAries from '../pages/love/capricorn/LoveCapricornAries';
import LoveCapricornTaurus from '../pages/love/capricorn/LoveCapricornTaurus';
import LoveCapricornGemini from '../pages/love/capricorn/LoveCapricornGemini';
import LoveCapricornCancer from '../pages/love/capricorn/LoveCapricornCancer';
import LoveCapricornLeo from '../pages/love/capricorn/LoveCapricornLeo';
import LoveCapricornVirgo from '../pages/love/capricorn/LoveCapricornVirgo';
import LoveCapricornLibra from '../pages/love/capricorn/LoveCapricornLibra';
import LoveCapricornScorpio from '../pages/love/capricorn/LoveCapricornScorpio';
import LoveCapricornSagittarius from '../pages/love/capricorn/LoveCapricornSagittarius';
import LoveCapricornCapricorn from '../pages/love/capricorn/LoveCapricornCapricorn';
import LoveCapricornAquarius from '../pages/love/capricorn/LoveCapricornAquarius';
import LoveCapricornPisces from '../pages/love/capricorn/LoveCapricornPisces';
import LoveAquariusAries from '../pages/love/aquarius/LoveAquariusAries';
import LoveAquariusTaurus from '../pages/love/aquarius/LoveAquariusTaurus';
import LoveAquariusGemini from '../pages/love/aquarius/LoveAquariusGemini';
import LoveAquariusCancer from '../pages/love/aquarius/LoveAquariusCancer';
import LoveAquariusLeo from '../pages/love/aquarius/LoveAquariusLeo';
import LoveAquariusVirgo from '../pages/love/aquarius/LoveAquariusVirgo';
import LoveAquariusLibra from '../pages/love/aquarius/LoveAquariusLibra';
import LoveAquariusScorpio from '../pages/love/aquarius/LoveAquariusScorpio';
import LoveAquariusSagittarius from '../pages/love/aquarius/LoveAquariusSagittarius';
import LoveAquariusCapricorn from '../pages/love/aquarius/LoveAquariusCapricorn';
import LoveAquariusAquarius from '../pages/love/aquarius/LoveAquariusAquarius';
import LoveAquariusPisces from '../pages/love/aquarius/LoveAquariusPisces';
import LovePiscesAries from '../pages/love/pisces/LovePiscesAries';
import LovePiscesTaurus from '../pages/love/pisces/LovePiscesTaurus';
import LovePiscesGemini from '../pages/love/pisces/LovePiscesGemini';
import LovePiscesCancer from '../pages/love/pisces/LovePiscesCancer';
import LovePiscesLeo from '../pages/love/pisces/LovePiscesLeo';
import LovePiscesVirgo from '../pages/love/pisces/LovePiscesVirgo';
import LovePiscesLibra from '../pages/love/pisces/LovePiscesLibra';
import LovePiscesScorpio from '../pages/love/pisces/LovePiscesScorpio';
import LovePiscesSagittarius from '../pages/love/pisces/LovePiscesSagittarius';
import LovePiscesCapricorn from '../pages/love/pisces/LovePiscesCapricorn';
import LovePiscesAquarius from '../pages/love/pisces/LovePiscesAquarius';
import LovePiscesPisces from '../pages/love/pisces/LovePiscesPisces';

import React from 'react';

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Daily Horoscopes */}
        <Route path="/dailyhoroscopes" element={<Daily />} />
        <Route path="/dailyhoroscopes/aries" element={<DailyAries />} />
        <Route path="/dailyhoroscopes/taurus" element={<DailyTaurus />} />
        <Route path="/dailyhoroscopes/gemini" element={<DailyGemini />} />
        <Route path="/dailyhoroscopes/cancer" element={<DailyCancer />} />
        <Route path="/dailyhoroscopes/leo" element={<DailyLeo />} />
        <Route path="/dailyhoroscopes/virgo" element={<DailyVirgo />} />
        <Route path="/dailyhoroscopes/libra" element={<DailyLibra />} />
        <Route path="/dailyhoroscopes/scorpio" element={<DailyScorpio />} />
        <Route
          path="/dailyhoroscopes/sagittarius"
          element={<DailySagittarius />}
        />
        <Route path="/dailyhoroscopes/capricorn" element={<DailyCapricorn />} />
        <Route path="/dailyhoroscopes/aquarius" element={<DailyAquarius />} />
        <Route path="/dailyhoroscopes/pisces" element={<DailyPisces />} />

        {/* Love Compatibility */}
        <Route path="/lovecompatibility" element={<Love />} />
        <Route path="/lovecompatibility/aries" element={<LoveAries />} />
        <Route path="/lovecompatibility/taurus" element={<LoveTaurus />} />
        <Route path="/lovecompatibility/gemini" element={<LoveGemini />} />
        <Route path="/lovecompatibility/cancer" element={<LoveCancer />} />
        <Route path="/lovecompatibility/leo" element={<LoveLeo />} />
        <Route path="/lovecompatibility/virgo" element={<LoveVirgo />} />
        <Route path="/lovecompatibility/libra" element={<LoveLibra />} />
        <Route path="/lovecompatibility/scorpio" element={<LoveScorpio />} />
        <Route
          path="/lovecompatibility/sagittarius"
          element={<LoveSagittarius />}
        />
        <Route
          path="/lovecompatibility/capricorn"
          element={<LoveCapricorn />}
        />
        <Route path="/lovecompatibility/aquarius" element={<LoveAquarius />} />
        <Route path="/lovecompatibility/pisces" element={<LovePisces />} />
        <Route
          path="/lovecompatibility/aries/aries"
          element={<LoveAriesAries />}
        />
        <Route
          path="/lovecompatibility/aries/taurus"
          element={<LoveAriesTaurus />}
        />
        <Route
          path="/lovecompatibility/aries/gemini"
          element={<LoveAriesGemini />}
        />
        <Route
          path="/lovecompatibility/aries/cancer"
          element={<LoveAriesCancer />}
        />
        <Route path="/lovecompatibility/aries/leo" element={<LoveAriesLeo />} />
        <Route
          path="/lovecompatibility/aries/virgo"
          element={<LoveAriesVirgo />}
        />
        <Route
          path="/lovecompatibility/aries/libra"
          element={<LoveAriesLibra />}
        />
        <Route
          path="/lovecompatibility/aries/scorpio"
          element={<LoveAriesScorpio />}
        />
        <Route
          path="/lovecompatibility/aries/sagittarius"
          element={<LoveAriesSagittarius />}
        />
        <Route
          path="/lovecompatibility/aries/capricorn"
          element={<LoveAriesCapricorn />}
        />
        <Route
          path="/lovecompatibility/aries/aquarius"
          element={<LoveAriesAquarius />}
        />
        <Route
          path="/lovecompatibility/aries/pisces"
          element={<LoveAriesPisces />}
        />
        <Route
          path="/lovecompatibility/taurus/aries"
          element={<LoveTaurusAries />}
        />
        <Route
          path="/lovecompatibility/taurus/taurus"
          element={<LoveTaurusTaurus />}
        />
        <Route
          path="/lovecompatibility/taurus/gemini"
          element={<LoveTaurusGemini />}
        />
        <Route
          path="/lovecompatibility/taurus/cancer"
          element={<LoveTaurusCancer />}
        />
        <Route
          path="/lovecompatibility/taurus/leo"
          element={<LoveTaurusLeo />}
        />
        <Route
          path="/lovecompatibility/taurus/virgo"
          element={<LoveTaurusVirgo />}
        />
        <Route
          path="/lovecompatibility/taurus/libra"
          element={<LoveTaurusLibra />}
        />
        <Route
          path="/lovecompatibility/taurus/scorpio"
          element={<LoveTaurusScorpio />}
        />
        <Route
          path="/lovecompatibility/taurus/sagittarius"
          element={<LoveTaurusSagittarius />}
        />
        <Route
          path="/lovecompatibility/taurus/capricorn"
          element={<LoveTaurusCapricorn />}
        />
        <Route
          path="/lovecompatibility/taurus/aquarius"
          element={<LoveTaurusAquarius />}
        />
        <Route
          path="/lovecompatibility/taurus/pisces"
          element={<LoveTaurusPisces />}
        />
        <Route
          path="/lovecompatibility/gemini/aries"
          element={<LoveGeminiAries />}
        />
        <Route
          path="/lovecompatibility/gemini/taurus"
          element={<LoveGeminiTaurus />}
        />
        <Route
          path="/lovecompatibility/gemini/gemini"
          element={<LoveGeminiGemini />}
        />
        <Route
          path="/lovecompatibility/gemini/cancer"
          element={<LoveGeminiCancer />}
        />
        <Route
          path="/lovecompatibility/gemini/leo"
          element={<LoveGeminiLeo />}
        />
        <Route
          path="/lovecompatibility/gemini/virgo"
          element={<LoveGeminiVirgo />}
        />
        <Route
          path="/lovecompatibility/gemini/libra"
          element={<LoveGeminiLibra />}
        />
        <Route
          path="/lovecompatibility/gemini/scorpio"
          element={<LoveGeminiScorpio />}
        />
        <Route
          path="/lovecompatibility/gemini/sagittarius"
          element={<LoveGeminiSagittarius />}
        />
        <Route
          path="/lovecompatibility/gemini/capricorn"
          element={<LoveGeminiCapricorn />}
        />
        <Route
          path="/lovecompatibility/gemini/aquarius"
          element={<LoveGeminiAquarius />}
        />
        <Route
          path="/lovecompatibility/gemini/pisces"
          element={<LoveGeminiPisces />}
        />
        <Route
          path="/lovecompatibility/cancer/aries"
          element={<LoveCancerAries />}
        />
        <Route
          path="/lovecompatibility/cancer/taurus"
          element={<LoveCancerTaurus />}
        />
        <Route
          path="/lovecompatibility/cancer/gemini"
          element={<LoveCancerGemini />}
        />
        <Route
          path="/lovecompatibility/cancer/cancer"
          element={<LoveCancerCancer />}
        />
        <Route
          path="/lovecompatibility/cancer/leo"
          element={<LoveCancerLeo />}
        />
        <Route
          path="/lovecompatibility/cancer/virgo"
          element={<LoveCancerVirgo />}
        />
        <Route
          path="/lovecompatibility/cancer/libra"
          element={<LoveCancerLibra />}
        />
        <Route
          path="/lovecompatibility/cancer/scorpio"
          element={<LoveCancerScorpio />}
        />
        <Route
          path="/lovecompatibility/cancer/sagittarius"
          element={<LoveCancerSagittarius />}
        />
        <Route
          path="/lovecompatibility/cancer/capricorn"
          element={<LoveCancerCapricorn />}
        />
        <Route
          path="/lovecompatibility/cancer/aquarius"
          element={<LoveCancerAquarius />}
        />
        <Route
          path="/lovecompatibility/cancer/pisces"
          element={<LoveCancerPisces />}
        />
        <Route path="/lovecompatibility/leo/aries" element={<LoveLeoAries />} />
        <Route
          path="/lovecompatibility/leo/taurus"
          element={<LoveLeoTaurus />}
        />
        <Route
          path="/lovecompatibility/leo/gemini"
          element={<LoveLeoGemini />}
        />
        <Route
          path="/lovecompatibility/leo/cancer"
          element={<LoveLeoCancer />}
        />
        <Route path="/lovecompatibility/leo/leo" element={<LoveLeoLeo />} />
        <Route path="/lovecompatibility/leo/virgo" element={<LoveLeoVirgo />} />
        <Route path="/lovecompatibility/leo/libra" element={<LoveLeoLibra />} />
        <Route
          path="/lovecompatibility/leo/scorpio"
          element={<LoveLeoScorpio />}
        />
        <Route
          path="/lovecompatibility/leo/sagittarius"
          element={<LoveLeoSagittarius />}
        />
        <Route
          path="/lovecompatibility/leo/capricorn"
          element={<LoveLeoCapricorn />}
        />
        <Route
          path="/lovecompatibility/leo/aquarius"
          element={<LoveLeoAquarius />}
        />
        <Route
          path="/lovecompatibility/leo/pisces"
          element={<LoveLeoPisces />}
        />
        <Route
          path="/lovecompatibility/virgo/aries"
          element={<LoveVirgoAries />}
        />
        <Route
          path="/lovecompatibility/virgo/taurus"
          element={<LoveVirgoTaurus />}
        />
        <Route
          path="/lovecompatibility/virgo/gemini"
          element={<LoveVirgoGemini />}
        />
        <Route
          path="/lovecompatibility/virgo/cancer"
          element={<LoveVirgoCancer />}
        />
        <Route path="/lovecompatibility/virgo/leo" element={<LoveVirgoLeo />} />
        <Route
          path="/lovecompatibility/virgo/virgo"
          element={<LoveVirgoVirgo />}
        />
        <Route
          path="/lovecompatibility/virgo/libra"
          element={<LoveVirgoLibra />}
        />
        <Route
          path="/lovecompatibility/virgo/scorpio"
          element={<LoveVirgoScorpio />}
        />
        <Route
          path="/lovecompatibility/virgo/sagittarius"
          element={<LoveVirgoSagittarius />}
        />
        <Route
          path="/lovecompatibility/virgo/capricorn"
          element={<LoveVirgoCapricorn />}
        />
        <Route
          path="/lovecompatibility/virgo/aquarius"
          element={<LoveVirgoAquarius />}
        />
        <Route
          path="/lovecompatibility/virgo/pisces"
          element={<LoveVirgoPisces />}
        />
        <Route
          path="/lovecompatibility/libra/aries"
          element={<LoveLibraAries />}
        />
        <Route
          path="/lovecompatibility/libra/taurus"
          element={<LoveLibraTaurus />}
        />
        <Route
          path="/lovecompatibility/libra/gemini"
          element={<LoveLibraGemini />}
        />
        <Route
          path="/lovecompatibility/libra/cancer"
          element={<LoveLibraCancer />}
        />
        <Route path="/lovecompatibility/libra/leo" element={<LoveLibraLeo />} />
        <Route
          path="/lovecompatibility/libra/virgo"
          element={<LoveLibraVirgo />}
        />
        <Route
          path="/lovecompatibility/libra/libra"
          element={<LoveLibraLibra />}
        />
        <Route
          path="/lovecompatibility/libra/scorpio"
          element={<LoveLibraScorpio />}
        />
        <Route
          path="/lovecompatibility/libra/sagittarius"
          element={<LoveLibraSagittarius />}
        />
        <Route
          path="/lovecompatibility/libra/capricorn"
          element={<LoveLibraCapricorn />}
        />
        <Route
          path="/lovecompatibility/libra/aquarius"
          element={<LoveLibraAquarius />}
        />
        <Route
          path="/lovecompatibility/libra/pisces"
          element={<LoveLibraPisces />}
        />
        <Route
          path="/lovecompatibility/scorpio/aries"
          element={<LoveScorpioAries />}
        />
        <Route
          path="/lovecompatibility/scorpio/taurus"
          element={<LoveScorpioTaurus />}
        />
        <Route
          path="/lovecompatibility/scorpio/gemini"
          element={<LoveScorpioGemini />}
        />
        <Route
          path="/lovecompatibility/scorpio/cancer"
          element={<LoveScorpioCancer />}
        />
        <Route
          path="/lovecompatibility/scorpio/leo"
          element={<LoveScorpioLeo />}
        />
        <Route
          path="/lovecompatibility/scorpio/virgo"
          element={<LoveScorpioVirgo />}
        />
        <Route
          path="/lovecompatibility/scorpio/libra"
          element={<LoveScorpioLibra />}
        />
        <Route
          path="/lovecompatibility/scorpio/scorpio"
          element={<LoveScorpioScorpio />}
        />
        <Route
          path="/lovecompatibility/scorpio/sagittarius"
          element={<LoveScorpioSagittarius />}
        />
        <Route
          path="/lovecompatibility/scorpio/capricorn"
          element={<LoveScorpioCapricorn />}
        />
        <Route
          path="/lovecompatibility/scorpio/aquarius"
          element={<LoveScorpioAquarius />}
        />
        <Route
          path="/lovecompatibility/scorpio/pisces"
          element={<LoveScorpioPisces />}
        />
        <Route
          path="/lovecompatibility/sagittarius/aries"
          element={<LoveSagittariusAries />}
        />
        <Route
          path="/lovecompatibility/sagittarius/taurus"
          element={<LoveSagittariusTaurus />}
        />
        <Route
          path="/lovecompatibility/sagittarius/gemini"
          element={<LoveSagittariusGemini />}
        />
        <Route
          path="/lovecompatibility/sagittarius/cancer"
          element={<LoveSagittariusCancer />}
        />
        <Route
          path="/lovecompatibility/sagittarius/leo"
          element={<LoveSagittariusLeo />}
        />
        <Route
          path="/lovecompatibility/sagittarius/virgo"
          element={<LoveSagittariusVirgo />}
        />
        <Route
          path="/lovecompatibility/sagittarius/libra"
          element={<LoveSagittariusLibra />}
        />
        <Route
          path="/lovecompatibility/sagittarius/scorpio"
          element={<LoveSagittariusScorpio />}
        />
        <Route
          path="/lovecompatibility/sagittarius/sagittarius"
          element={<LoveSagittariusSagittarius />}
        />
        <Route
          path="/lovecompatibility/sagittarius/capricorn"
          element={<LoveSagittariusCapricorn />}
        />
        <Route
          path="/lovecompatibility/sagittarius/aquarius"
          element={<LoveSagittariusAquarius />}
        />
        <Route
          path="/lovecompatibility/sagittarius/pisces"
          element={<LoveSagittariusPisces />}
        />
        <Route
          path="/lovecompatibility/capricorn/aries"
          element={<LoveCapricornAries />}
        />
        <Route
          path="/lovecompatibility/capricorn/taurus"
          element={<LoveCapricornTaurus />}
        />
        <Route
          path="/lovecompatibility/capricorn/gemini"
          element={<LoveCapricornGemini />}
        />
        <Route
          path="/lovecompatibility/capricorn/cancer"
          element={<LoveCapricornCancer />}
        />
        <Route
          path="/lovecompatibility/capricorn/leo"
          element={<LoveCapricornLeo />}
        />
        <Route
          path="/lovecompatibility/capricorn/virgo"
          element={<LoveCapricornVirgo />}
        />
        <Route
          path="/lovecompatibility/capricorn/libra"
          element={<LoveCapricornLibra />}
        />
        <Route
          path="/lovecompatibility/capricorn/scorpio"
          element={<LoveCapricornScorpio />}
        />
        <Route
          path="/lovecompatibility/capricorn/sagittarius"
          element={<LoveCapricornSagittarius />}
        />
        <Route
          path="/lovecompatibility/capricorn/capricorn"
          element={<LoveCapricornCapricorn />}
        />
        <Route
          path="/lovecompatibility/capricorn/aquarius"
          element={<LoveCapricornAquarius />}
        />
        <Route
          path="/lovecompatibility/capricorn/pisces"
          element={<LoveCapricornPisces />}
        />
        <Route
          path="/lovecompatibility/aquarius/aries"
          element={<LoveAquariusAries />}
        />
        <Route
          path="/lovecompatibility/aquarius/taurus"
          element={<LoveAquariusTaurus />}
        />
        <Route
          path="/lovecompatibility/aquarius/gemini"
          element={<LoveAquariusGemini />}
        />
        <Route
          path="/lovecompatibility/aquarius/cancer"
          element={<LoveAquariusCancer />}
        />
        <Route
          path="/lovecompatibility/aquarius/leo"
          element={<LoveAquariusLeo />}
        />
        <Route
          path="/lovecompatibility/aquarius/virgo"
          element={<LoveAquariusVirgo />}
        />
        <Route
          path="/lovecompatibility/aquarius/libra"
          element={<LoveAquariusLibra />}
        />
        <Route
          path="/lovecompatibility/aquarius/scorpio"
          element={<LoveAquariusScorpio />}
        />
        <Route
          path="/lovecompatibility/aquarius/sagittarius"
          element={<LoveAquariusSagittarius />}
        />
        <Route
          path="/lovecompatibility/aquarius/capricorn"
          element={<LoveAquariusCapricorn />}
        />
        <Route
          path="/lovecompatibility/aquarius/aquarius"
          element={<LoveAquariusAquarius />}
        />
        <Route
          path="/lovecompatibility/aquarius/pisces"
          element={<LoveAquariusPisces />}
        />
        <Route
          path="/lovecompatibility/pisces/aries"
          element={<LovePiscesAries />}
        />
        <Route
          path="/lovecompatibility/pisces/taurus"
          element={<LovePiscesTaurus />}
        />
        <Route
          path="/lovecompatibility/pisces/gemini"
          element={<LovePiscesGemini />}
        />
        <Route
          path="/lovecompatibility/pisces/cancer"
          element={<LovePiscesCancer />}
        />
        <Route
          path="/lovecompatibility/pisces/leo"
          element={<LovePiscesLeo />}
        />
        <Route
          path="/lovecompatibility/pisces/virgo"
          element={<LovePiscesVirgo />}
        />
        <Route
          path="/lovecompatibility/pisces/libra"
          element={<LovePiscesLibra />}
        />
        <Route
          path="/lovecompatibility/pisces/scorpio"
          element={<LovePiscesScorpio />}
        />
        <Route
          path="/lovecompatibility/pisces/sagittarius"
          element={<LovePiscesSagittarius />}
        />
        <Route
          path="/lovecompatibility/pisces/capricorn"
          element={<LovePiscesCapricorn />}
        />
        <Route
          path="/lovecompatibility/pisces/aquarius"
          element={<LovePiscesAquarius />}
        />
        <Route
          path="/lovecompatibility/pisces/pisces"
          element={<LovePiscesPisces />}
        />
      </Routes>
    </Router>
  );
};
