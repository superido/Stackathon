package filter;

import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException;
import org.apache.commons.lang.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

import static org.springframework.cloud.netflix.zuul.filters.support.FilterConstants.PRE_TYPE;

/**
 */
@Component
public class LoginFilter extends ZuulFilter {

    /**
     * 
     * @return
     */
    @Override
    public String filterType() {
        return PRE_TYPE;
    }

    /**
     * 
     * @return
     */
    @Override
    public int filterOrder() {

        return 4;
    }

    /**
     * 
     * @return
     */
    @Override
    public boolean shouldFilter() {

        RequestContext requestContext = RequestContext.getCurrentContext();
        HttpServletRequest request = requestContext.getRequest();

        System.out.println(request.getRequestURI());

        if ("ibm/stockmarket/user/userinfo/login".equalsIgnoreCase(request.getRequestURI())) {
            return true;
        }

        return false;
    }

    /**
     * @return
     * @throws ZuulException
     */
    @Override
    public Object run() throws ZuulException {

        //JWT
        RequestContext ctx =  RequestContext.getCurrentContext();
        HttpServletRequest  request = ctx.getRequest();

        //token
        String token = request.getHeader("token");

        if(StringUtils.isBlank((token))){
            token  = request.getParameter("token");
        }

        // JWT
        if (StringUtils.isNotBlank(token)) {// && "123abc".equals(token)
            ctx.setSendZuulResponse(true);
            ctx.setResponseStatusCode(HttpStatus.OK.value());
            ctx.set("isSuccess", true);
        }else{
            ctx.setSendZuulResponse(false);
            ctx.setResponseStatusCode(HttpStatus.UNAUTHORIZED.value());
            ctx.setResponseBody("{\"result\":\"token is not correct!\"}");
            ctx.set("isSuccess", false);
        }

        return null;
    }
}
