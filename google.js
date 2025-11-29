        import { getAnalytics, logEvent } from "firebase/analytics";
        const analytics = getAnalytics();
        
        // After a user successfully signs in
        logEvent(analytics, 'login', {
          method: 'Email/Password', // Or 'Google', 'Facebook', etc. depending on your auth methods
        });
        
    
     
