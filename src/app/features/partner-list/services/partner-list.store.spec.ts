import { TestBed } from '@angular/core/testing';
import { PartnerListStoreService } from './partner-list.store';
import { HttpPartnerListService } from './htpp-partner-list.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Status } from '../../../shared/models/status';
import { Partner } from '../models/partner';
import { of } from 'rxjs';

// length === 35
const partners: Partner[] = [
    {
        id:1,
        name:"Bells & Whistles",
        reference:"xxxxxx",
        locale:"en_ES",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:2,
        name:"Emanuel Greer",
        reference:"xxxxxx2",
        locale:"en_GB",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:3,
        name:"Toby Blair",
        reference:"xxxxxx3",
        locale:"fr_BE",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:4,
        name:"Sara Vasquez",
        reference:"xxxxxx4",
        locale:"fr_FR",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:5,
        name:"Calvin Clark",
        reference:"xxxxxx5",
        locale:"de_DE",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:1,
        name:"Bells & Whistles",
        reference:"xxxxxx",
        locale:"en_ES",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:2,
        name:"Emanuel Greer",
        reference:"xxxxxx2",
        locale:"en_GB",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:3,
        name:"Toby Blair",
        reference:"xxxxxx3",
        locale:"fr_BE",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:4,
        name:"Sara Vasquez",
        reference:"xxxxxx4",
        locale:"fr_FR",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:5,
        name:"Calvin Clark",
        reference:"xxxxxx5",
        locale:"de_DE",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:1,
        name:"Bells & Whistles",
        reference:"xxxxxx",
        locale:"en_ES",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:2,
        name:"Emanuel Greer",
        reference:"xxxxxx2",
        locale:"en_GB",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:3,
        name:"Toby Blair",
        reference:"xxxxxx3",
        locale:"fr_BE",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:4,
        name:"Sara Vasquez",
        reference:"xxxxxx4",
        locale:"fr_FR",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:5,
        name:"Calvin Clark",
        reference:"xxxxxx5",
        locale:"de_DE",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:1,
        name:"Bells & Whistles",
        reference:"xxxxxx",
        locale:"en_ES",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:2,
        name:"Emanuel Greer",
        reference:"xxxxxx2",
        locale:"en_GB",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:3,
        name:"Toby Blair",
        reference:"xxxxxx3",
        locale:"fr_BE",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:4,
        name:"Sara Vasquez",
        reference:"xxxxxx4",
        locale:"fr_FR",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:5,
        name:"Calvin Clark",
        reference:"xxxxxx5",
        locale:"de_DE",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:1,
        name:"Bells & Whistles",
        reference:"xxxxxx",
        locale:"en_ES",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:2,
        name:"Emanuel Greer",
        reference:"xxxxxx2",
        locale:"en_GB",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:3,
        name:"Toby Blair",
        reference:"xxxxxx3",
        locale:"fr_BE",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:4,
        name:"Sara Vasquez",
        reference:"xxxxxx4",
        locale:"fr_FR",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:5,
        name:"Calvin Clark",
        reference:"xxxxxx5",
        locale:"de_DE",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:1,
        name:"Bells & Whistles",
        reference:"xxxxxx",
        locale:"en_ES",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:2,
        name:"Emanuel Greer",
        reference:"xxxxxx2",
        locale:"en_GB",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:3,
        name:"Toby Blair",
        reference:"xxxxxx3",
        locale:"fr_BE",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:4,
        name:"Sara Vasquez",
        reference:"xxxxxx4",
        locale:"fr_FR",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:5,
        name:"Calvin Clark",
        reference:"xxxxxx5",
        locale:"de_DE",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:1,
        name:"Bells & Whistles",
        reference:"xxxxxx",
        locale:"en_ES",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:2,
        name:"Emanuel Greer",
        reference:"xxxxxx2",
        locale:"en_GB",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:3,
        name:"Toby Blair",
        reference:"xxxxxx3",
        locale:"fr_BE",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:4,
        name:"Sara Vasquez",
        reference:"xxxxxx4",
        locale:"fr_FR",
        expirationTime:"2017-10-03T12:18:46+00:00"
    },
    {
        id:5,
        name:"Calvin Clark",
        reference:"xxxxxx5",
        locale:"de_DE",
        expirationTime:"2017-10-03T12:18:46+00:00"
    }
];

const MOCK_HTTP_PARTNER_LIST_SERVICE = {
    createPartner: () => of(partners[0]),
};

const MOCK_NOTIFICATION_SERVICE = {
    openSuccess: () => { },
};

describe('PartnerListStoreService', () => {
    TestBed.configureTestingModule({});
    
    let service: PartnerListStoreService;
    let httpPartnerListService: HttpPartnerListService;
    let notificationService: NotificationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: HttpPartnerListService,
                    useValue: MOCK_HTTP_PARTNER_LIST_SERVICE,
                },
                {
                    provide: NotificationService,
                    useValue: MOCK_NOTIFICATION_SERVICE,
                },
            ]
        });

        service = TestBed.inject(PartnerListStoreService);
        httpPartnerListService = TestBed.inject(HttpPartnerListService);
        notificationService = TestBed.inject(NotificationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should initialize with the correct initial state', () => {
        expect(service.status()).toEqual(Status.Loading);
        expect(service.partners()).toBeUndefined();
        expect(service.pageIndex()).toEqual(1);
        expect(service.pageSize()).toEqual(10);
        expect(service.total()).toEqual(0);
    });

    describe('createPartner', () => {
        it('should get partners and display a notification when it went well', () => {
            const newPartner: Partial<Partner> = {
                name: 'John Doe',
                reference: 'xxxxxx6',
                locale: 'en_US',
                expirationTime: '2017-10-03T12:18:46+00',
            };
            const response: Partner = {
                id: 55,
                name: 'John Doe',
                reference: 'xxxxxx6',
                locale: 'en_US',
                expirationTime: '2017-10-03T12:18:46+00',
            };
            const createPartnerSpy = spyOn(httpPartnerListService, 'createPartner').and.returnValue(of(response));
            const getPartnersSpy = spyOn(service, 'getPartners');
            const openSuccessSpy = spyOn(notificationService, 'openSuccess');

            service.createPartner(newPartner);

            expect(createPartnerSpy).toHaveBeenCalledOnceWith(newPartner);
            expect(getPartnersSpy).toHaveBeenCalledOnceWith(1, 10);
            expect(openSuccessSpy).toHaveBeenCalledOnceWith('Partner created successfully');
        });
    });
});